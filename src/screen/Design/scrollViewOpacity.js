import React, { Component } from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    RefreshControl,
} from 'react-native';
import color from '../../component/color';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class ScrollViewOpacity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };
    }

    _renderScrollViewContent() {
        const data = Array.from({ length: 30 });
        return (
            <View style={styles.scrollViewContent}>
                {data.map((_, i) => (
                    <View key={i} style={styles.row}>
                        <Text style={{ fontSize: 20, color: color.black }}>{i}</Text>
                    </View>
                ))}
            </View>
        );
    }

    render() {
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={color.primary}
                />
                <Animated.ScrollView
                    style={styles.container}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                setTimeout(() => this.setState({ refreshing: false }), 1000);
                            }}
                            progressViewOffset={HEADER_MAX_HEIGHT}
                        />
                    }
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>
                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}
                >
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}
                        source={require('../../image/girl.jpg')}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            transform: [
                                { scale: titleScale },
                                { translateY: titleTranslate },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.title}>ScrollView Opacity Example</Text>
                </Animated.View>
            </View>
        );
    }
}
export default ScrollViewOpacity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        position: 'absolute',
        height: HEADER_MAX_HEIGHT,
        backgroundColor: color.header,
    },
    backgroundImage: {
        top: 0,
        left: 0,
        right: 0,
        width: null,
        resizeMode: 'cover',
        position: 'absolute',
        height: HEADER_MAX_HEIGHT,
    },
    bar: {
        top: 0,
        left: 0,
        right: 0,
        height: 32,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
    },
    title: {
        fontSize: 28,
        color: color.red,
        fontWeight: "bold"

    },
    scrollViewContent: {
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    },
    row: {
        height: 40,
        margin: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
    },
});