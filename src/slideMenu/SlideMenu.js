import React, { Component } from 'react';
import { View ,Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from "../componenet/Color";

export default class slideMenu extends Component{
    render(){
        return (
            <View>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
              style={styles.card}>
              <Text style={{ color: colors.white, fontSize: 22 }}>React Native</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
              style={styles.subCard}>
                <Icon name="home" size={20} />
                <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("Texts")}
              style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Text</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate("Buttons")}
              style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Button</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Scroll")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Scroll View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Images")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Animations")} 
                style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Animation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Pickers")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Picker</Text>
              </TouchableOpacity>
              <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate("Progress")}
                 style={styles.subCard}>
                <Icon name="book" size={20} />
                <Text style={styles.txt}>Progress Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("SectionList")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                 <Text style={styles.txt}>SectionList</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("StatusBars")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                 <Text style={styles.txt}>Status Bar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Switch")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                 <Text style={styles.txt}>Switch</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("WebViews")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                 <Text style={styles.txt}>Web View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=> this.props.navigation.navigate("Shares")}
                style={styles.subCard}>
                <Icon name="book" size={20} />
                 <Text style={styles.txt}>Share</Text>
              </TouchableOpacity>
              
            </View>
         );
    }
}
const styles = StyleSheet.create({
    card: {
      //margin: 8,
      backgroundColor: colors.primary,
      //elevation: 1,
      padding: 50,
      borderRadius: 2
    },
    subCard:{
        backgroundColor:colors.white,
        padding:10,
        borderBottomWidth:0.5,
        flexDirection:"row"
    },
    txt:{
        marginLeft:10
    }
  });
