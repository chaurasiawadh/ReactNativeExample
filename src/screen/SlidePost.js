import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {withNavigation} from "react-navigation";

class SlidePost extends Component<Props> {

  render() {
    return (
      // <View>
      // <TouchableOpacity
      // onPress={()=> this.props.navigation.navigate("Details")}
      // style={styles.card}>
      //   <View>
      //     <Image
      //     style={styles.img}
      //     resizeMode="stretch"
      //     source={require('../image/math.jpg')} />
      //   </View>
      //   <View style={styles.subCard}>
      //     <Text style={styles.subject}>Mathematics</Text>
      //     <Text style={styles.rs}>Rs. 200</Text>
      //     <Text style={styles.rss}>Rs. 90</Text>
      //   </View>
      //   </TouchableOpacity>
      // </View>

      <View>
        <Text>hei</Text>
      </View>
   );
  }
}
const styles = StyleSheet.create({
img:{
  height:200,
  width:200
},
card:{
  elevation:5,
  padding:10,
  backgroundColor:"white",
  flexDirection:"row",
  borderBottomWidth:2,
  marginTop:5,
  marginLeft:5,
  marginRight:5
},
subCard:{
  width:"50%",
  alignSelf:"center",
  alignItems:"center"

},
subject:{
  fontWeight: 'bold',
  fontSize:22,

},
rs:{
  textDecorationLine: 'line-through',
  fontSize:20,
    textDecorationColor: "#fff",
    color:"red"
},
rss:{
  fontSize:20
}
});
export default withNavigation(SlidePost)
