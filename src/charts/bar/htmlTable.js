import React, {useMemo, useState} from 'react';
import {View, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

import color from '../../assets/color';

const {width: chartWidth} = Dimensions.get('window');

export const HtmlTable = () => {
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
        <script src="https://code.highcharts.com/modules/data.js"></script>
         <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
            <table id="datatable" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Boys</th>
                        <th>Girls</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2016</th>
                        <td>30 386</td>
                        <td>28 504</td>
                    </tr>
                    <tr>
                        <th>2017</th>
                        <td>29 173</td>
                        <td>27 460</td>
                    </tr>
                    <tr>
                        <th>2018</th>
                        <td>28 430</td>
                        <td>26 690</td>
                    </tr>
                    <tr>
                        <th>2019</th>
                        <td>28 042</td>
                        <td>26 453</td>
                    </tr>
                    <tr>
                        <th>2020</th>
                        <td>27 063</td>
                        <td>25 916</td>
                    </tr>
                    <tr>
                        <th>2021</th>
                        <td>28 684</td>
                        <td>27 376</td>
                    </tr>
                </tbody>
            </table>
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
    Highcharts.chart('container', {
        credits: {
            enabled: false
        },
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Live births in India'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Amount'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
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
        source={{
          html,
        }}
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

