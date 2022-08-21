import React, {useMemo, useState} from 'react';
import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import color from '../../assets/color';

const {width: chartWidth} = Dimensions.get('window');

export const FlagsMarkingEvents = () => {
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
       

        <script src="https://code.highcharts.com/stock/highstock.js"></script>
        <script src="https://code.highcharts.com/stock/modules/data.js"></script>
         
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <div id="container"></div>
    <script>
    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json', function (data) {

        let year = new Date(data[data.length - 1][0]).getFullYear(); // Get year of last data point
    
        // Create the chart
        Highcharts.stockChart('container', {
            credits: {
                enabled: false,
              },
            rangeSelector: {
                selected: 4
            },
    
            title: {
                text: 'USD to EUR exchange rate'
            },
    
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
    
            plotOptions: {
                flags: {
                    accessibility: {
                        exposeAsGroupOnly: true,
                        description: 'Flagged events.'
                    }
                }
            },
    
            series: [{
                name: 'USD to EUR',
                data: data,
                id: 'dataseries',
                tooltip: {
                    valueDecimals: 4
                }
            }, {
                type: 'flags',
                data: [{
                    x: Date.UTC(year, 1, 22),
                    title: 'A',
                    text: 'Shape: "squarepin"'
                }, {
                    x: Date.UTC(year, 3, 28),
                    title: 'A',
                    text: 'Shape: "squarepin"'
                }],
                onSeries: 'dataseries',
                shape: 'squarepin',
                width: 16
            }, {
                type: 'flags',
                data: [{
                    x: Date.UTC(year, 2, 1),
                    title: 'B',
                    text: 'Shape: "circlepin"'
                }, {
                    x: Date.UTC(year, 3, 1),
                    title: 'B',
                    text: 'Shape: "circlepin"'
                }],
                shape: 'circlepin',
                width: 16
            }, {
                type: 'flags',
                data: [{
                    x: Date.UTC(year, 2, 10),
                    title: 'C',
                    text: 'Shape: "flag"'
                }, {
                    x: Date.UTC(year, 3, 11),
                    title: 'C',
                    text: 'Shape: "flag"'
                }],
                color: Highcharts.getOptions().colors[0], // same as onSeries
                fillColor: Highcharts.getOptions().colors[0],
                onSeries: 'dataseries',
                width: 16,
                style: { // text style
                    color: 'white'
                },
                states: {
                    hover: {
                        fillColor: '#395C84' // darker
                    }
                }
            }]
        });
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
