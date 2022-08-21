import React, {useMemo, useState} from 'react';
import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import color from '../../assets/color';

const {width: chartWidth} = Dimensions.get('window');

export const StockGUI = () => {
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
        <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/stocktools/gui.css">
        <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/annotations/popup.css">
        
        <script src="https://code.highcharts.com/stock/highstock.js"></script>
        <script src="https://code.highcharts.com/stock/modules/data.js"></script>
        
        <script src="https://code.highcharts.com/stock/indicators/indicators-all.js"></script>
        <script src="https://code.highcharts.com/stock/modules/drag-panes.js"></script>
        
        <script src="https://code.highcharts.com/modules/annotations-advanced.js"></script>
        <script src="https://code.highcharts.com/modules/price-indicator.js"></script>
        <script src="https://code.highcharts.com/modules/full-screen.js"></script>
        
        <script src="https://code.highcharts.com/modules/stock-tools.js"></script>
        
        <script src="https://code.highcharts.com/stock/modules/heikinashi.js"></script>
        <script src="https://code.highcharts.com/stock/modules/hollowcandlestick.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        <style>
          #container {
            max-height: 800px;
            min-height: 75vh;
          }
        </style>
      </head>
      <body>
        <div id="container"></div>
      </body>
    <script>
    Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlcv.json', function (data) {

        // split the data set into ohlc and volume
        let ohlc = [],
            volume = [],
            dataLength = data.length,
            i = 0;
    
        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);
    
            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }
    
        Highcharts.stockChart('container', {
            credits: {
                enabled: false,
              },
            yAxis: [{
                labels: {
                    align: 'left'
                },
                height: '80%',
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'left'
                },
                top: '80%',
                height: '20%',
                offset: 0
            }],
            tooltip: {
                shape: 'square',
                headerShape: 'callout',
                borderWidth: 0,
                shadow: false,
                positioner: function (width, height, point) {
                    let chart = this.chart,
                        position;
    
                    if (point.isHeader) {
                        position = {
                            x: Math.max(
                                // Left side limit
                                chart.plotLeft,
                                Math.min(
                                    point.plotX + chart.plotLeft - width / 2,
                                    // Right side limit
                                    chart.chartWidth - width - chart.marginRight
                                )
                            ),
                            y: point.plotY
                        };
                    } else {
                        position = {
                            x: point.series.chart.plotLeft,
                            y: point.series.yAxis.top - chart.plotTop
                        };
                    }
    
                    return position;
                }
            },
            series: [{
                type: 'ohlc',
                id: 'aapl-ohlc',
                name: 'AAPL Stock Price',
                data: ohlc
            }, {
                type: 'column',
                id: 'aapl-volume',
                name: 'AAPL Volume',
                data: volume,
                yAxis: 1
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        rangeSelector: {
                            inputEnabled: false
                        }
                    }
                }]
            }
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
