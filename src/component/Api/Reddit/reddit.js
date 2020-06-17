import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../color';
import Header from './header';
import { popularApi } from './api';
import { DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAF from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import OIcon from 'react-native-vector-icons/Octicons';
import LocalStorage from 'react-native-local-storage';
import { styles } from './styles';

class Reddit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      save: false,
      refreshing: false,
      favItems: {},
      starCheck: true,
      scrollPosition: 0,
      favouriteTab: this.props.navigation.getParam('name'),
    };
  }

  componentDidMount() {
    this.apis();
    if (!this.state.favouriteTab) {
      this.getLocalFav().then(favItems => {
        if (favItems) {
          this.setState({
            favItems,
          });
        }
      });
    }
  }

  goBack = (screen) => {
    this.props.navigation.navigate(screen);
  };

  apis = () => {
    if (this.state.favouriteTab) {
      this.getLocalFav()
        .then(data => {
          if (data) {
            const items = Object.values(data);
            this.setState({
              data: items,
            });
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      popularApi()
        .then(data => {
          this.setState({
            data,
          });
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  findFavItem = name => {
    const found = this.state.favItems[name];
    const check = found ? true : false;
    return check;
  };

  getLocalFav = async () => {
    return await LocalStorage.get('fav');
  };

  fav = async favItem => {
    const fav = await this.getLocalFav();
    let localState = {};
    if (!fav) {
      localState = {
        [favItem.name]: favItem,
      };
      await LocalStorage.save('fav', localState);
    } else {
      if (fav[favItem.name]) {
        delete fav[favItem.name];
        localState = fav;
        await LocalStorage.save('fav', localState);
      } else {
        localState = {
          ...fav,
          ...{
            [favItem.name]: favItem,
          },
        };

        await LocalStorage.save('fav', localState);
      }
    }
    this.setState({
      favItems: { ...localState },
    });
  };

  onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this.apis();
    this.setState({
      refreshing: false,
    });
  };

  time = unix_time => {
    const timeDiff = Number(new Date()) - Number(unix_time * 1000);
    return (timeDiff / 3600000).toFixed(1) + 'h';
  };

  setScore = score => {
    const len = 1000;
    return score > len ? (score / len).toFixed(1) + 'k' : score;
  };

  onSlide = async () => {
    DrawerActions.openDrawer();
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  handleScroll = e => {
    this.setState({ scrollPosition: e.nativeEvent.contentOffset.y });
  };

  sendOnWhatsApp = text => {
    Linking.openURL(`whatsapp://send?text=${text}`);
  };

  renderItem = data => {
    const {
      title,
      subreddit,
      domain,
      ups,
      score,
      created_utc,
      url,
      num_comments,
      name,
      preview,
      thumbnail,
    } = data;
    return (
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.sub}>
          <Text style={styles.subTxt}>{subreddit}</Text>
          <Text style={styles.domain}>{domain}</Text>
          <Text style={styles.create}>{this.time(created_utc)}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreTxt}>{this.setScore(score)}</Text>
          <Text style={styles.comment}>{num_comments} comments</Text>
        </View>
        {preview ? (
          <Image style={styles.Image} source={{ uri: thumbnail }} />
        ) : null}

        <View style={styles.IconView}>
          <TouchableOpacity>
            <FAF name="arrow-circle-up" color={colors.icn} size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FAF name="arrow-circle-down" color={colors.icn} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => this.fav(data)}>
            {this.findFavItem(name) ? (
              <IconFont name="star" color={colors.red} size={20} />
            ) : (
                <IconFont name="star-o" color={colors.icn} size={20} />
              )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="comment-text-outline" size={24} color={colors.icn} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.sendOnWhatsApp(title + subreddit + domain)}>
            <IconFont name="whatsapp" size={24} color='green' />
          </TouchableOpacity>

          <TouchableOpacity
          //  onPress={()=>this.toggleModal()}
          >
            <IconFontisto name="more-v-a" size={20} color={colors.icn} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          goBack={this.goBack}
          onSlide={this.onSlide}
          fav={this.state.favouriteTab}
        />
        {this.state.data.length ? (
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={item =>
                this.renderItem(
                  this.state.favouriteTab ? item.item : item.item.data,
                )
              }
              onRefresh={this.onRefresh}
              refreshing={this.state.refreshing}
              onEndReachedThreshold={0.2}
              onScroll={e => this.handleScroll(e)}
            />
            <TouchableOpacity style={styles.float}>
              <OIcon name="plus" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
            <ActivityIndicator />
          )}
      </View>
    );
  }
}

export default Reddit;
