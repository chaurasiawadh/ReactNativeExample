import React, {useMemo, useState} from 'react';
import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import color from '../../assets/color';

const {width: chartWidth} = Dimensions.get('window');

export const NegativeStack = () => {
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
    // Data gathered from http://populationpyramid.net/germany/2015/

    // Age categories
    let categories = [
        '0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '
    ];
    
    Highcharts.chart('container', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Population pyramid for India'
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
            }
        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Age (male)'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Age (female)'
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                    return Math.abs(this.value) + '%';
                }
            },
            accessibility: {
                description: 'Percentage population',
                rangeDescription: 'Range: 0 to 5%'
            }
        },
    
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                    'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
            }
        },
    
        series: [{
            name: 'Male',
            data: [
                -2.2, -2.1, -2.2, -2.4,
                -2.7, -3.0, -3.3, -3.2,
                -2.9, -3.5, -4.4, -4.1,
                -3.4, -2.7, -2.3, -2.2,
                -1.6, -0.6, -0.3, -0.0,
                -0.0
            ]
        }, {
            name: 'Female',
            data: [
                2.1, 2.0, 2.1, 2.3, 2.6,
                2.9, 3.2, 3.1, 2.9, 3.4,
                4.3, 4.0, 3.5, 2.9, 2.5,
                2.7, 2.2, 1.1, 0.6, 0.2,
                0.0
            ]
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
