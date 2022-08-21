import React, {useMemo, useState} from 'react';
import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import color from '../../assets/color';

const {width: chartWidth} = Dimensions.get('window');

export const NegativeColumn = () => {
  const onMessage = data => {
    alert(data.nativeEvent.data);
  };

  const [isLoading, setIsLoading] = useState(true);

  const html = useMemo(
    () => `
      <!DOCTYPE html>
      <html>
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <script src="https://code.highcharts.com/highcharts.js"></script>
         <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
        </figure>
        <style>
        * {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          box-sizing: border-box;
        }
        #container {
          width: 100%;
          height: 90vh;
        },
        </style>
        <style>
        * {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          box-sizing: border-box;
        }
        #container {
          width: 100%;
          height: 90vh;
        },
        </style>
    <script>
    // Data retrieved from https://www.yr.no/nb
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Average temperature'
        },
        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December']
        },
        yAxis: {
            title: {
                text: 'Temperature °C'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Delhi',
            data: [
                -5.0, -3.6, 3.3, 5.8, 10.6, 17.3, 20.0, 16.5, 13.4, 9.1, 2.9, -3.1]
        }, {
            name: 'Kashmir',
            data: [-8.5, -7.8, -10.8, -6.8, -4.0, 3.7, 6.7, 6.4, 3.5, -3.7,
                -10.6, -7.7]
        }, {
            name: 'Bangalore',
            data: [-6.2, -4.6, 1.7, 2.3, 8.1, 13.2, 16.3, 12.1, 9.9, 7.0, 0.5, -2.9]
        }]
    });
      </script>
    </html>
    `,
    [isLoading],
  );

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <WebView
        style={{backgroundColor: 'transparent', width: chartWidth}}
        scrollEnabled={false}
        onMessage={onMessage}
        onLoadEnd={() => setIsLoading(false)}
        source={{html}}
      />
      {isLoading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            paddingTop: 100,
          }}>
          <ActivityIndicator size={100} color={color.primary} />
        </View>
      )}
    </View>
  );
};
