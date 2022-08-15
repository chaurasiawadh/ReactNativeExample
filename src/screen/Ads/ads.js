import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AdMobBanner } from "react-native-admob";

class ads extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-4429645261259158/5597519806"
                
                />
            </View>
            
        );
    }
}

export default ads;