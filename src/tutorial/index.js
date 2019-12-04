import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../component/color';

const list = [
  {
    key: 1,
    ques: 'What Is React Native?',
    ans:
      'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. React Native also exposes JavaScript interfaces for platform APIs, so your React Native apps can access platform features like the phone camera, or the user location.',
  },
  {
    key: 2,
    ques: 'What is the use of react native?',
    ans:
      'React Native is a framework that builds a hierarchy of UI components to build the JavaScript code. It has a set of components for both iOS and Android platforms to build a mobile application with native look and feel. ReactJS, on the other hand, is an open source JavaScript library to create user interfaces.',
  },
  {
    key: 3,
    ques: 'Why use React Native?',
    ans:
      'React Native was considered to be commercially unviable. It wasn’t developed or supported enough to produce ‘native-like’ apps. But the times have changed. React Native is gaining popularity, gaining community support, and gaining more market share. It’s getting easier and easier to write brilliant apps using React Native - and the world is taking notice.',
  },
  {
    key:4,
    ques: 'How Did Facebook Write React Native For Android?',
    ans: 'The first cross-platform React Native app - ads manager - was developed by the London-based dev team, who were in the US to announce the Android release yesterday evening. Ads manager lets businesses that advertise on the social network manage their accounts and create new adverts. React Native has only recently been proven in production and building a new app based on the framework carried some risk.'
  },
  {
    key:5,
    ques: 'Advantages Of React Native?',
    ans: "The fact that React Native actually renders using its host platform's standard rendering APIs enables it to stand out frommost existing methods of cross-platform application developement ,like Cordova or Ionic. Existing methods of writing mobile applications using combinations of JavaScript,HTML,and CSS typically render using webviews.While this approach can work, it also comes with drawbacks,especially around performance."
  },
  {
    key:6,
    ques: 'Are All React Components Usable In React Native?',
    ans: "Web React components use DOM elements to display (ex. div, h1, table, etc) but these are not supported by React Native. You'll need to find libraries/components made specifically for React Native. I doubt there are components that supports both, thus it should be fairly easy to figure out if it's made for React Native or not. As of now, if the creator does not specifically say that they made for React Native, it probably does not work on React Native."
  },
  {
    key:7,
    ques: 'Re-render On Changes?',
    ans: 'In addition to props, components can also have an internal state. The most prominent example of that behavior would be a click counter that updates its value when a button is pressed. The number of clicks itself would be saved in the state.'
  },
  {
    key:8,
    ques: 'What Is a State?',
    ans: 'State is mutable. This means that state can be updated in the future while props can’t. we can initialize state in the constructor, and then call setState when we want to change it.'
  },
  {
    key:9,
    ques: 'What Is A Prop?',
    ans: 'Props are immutable and are set by the parent and they are fixed throughout the lifetime of a component.'
  },
  {
    key:10,
    ques: 'What Happens When You Call Setstate?',
    ans: 'The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state.    To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.'
  },
  {
    key:11,
    ques: 'What is an Element?',
    ans: 'A React element describes what you want to see on the screen. Not so simply put, a React element is an object representation of some UI.'
  },
  {
    key:12,
    ques: 'What is a Component?',
    ans: 'A React component is a function or a class which optionally accepts input and returns a React element (typically via JSX which gets transpiled to a createElement invocation).'
  },
  {
    key:13,
    ques: 'When Would You Use A Class Component Over A Functional Component?',
    ans: 'If your component has state or a lifecycle method(s), use a Class component. Otherwise, use a Functional component.'
  },
  {
    key:14,
    ques: 'What Are Refs In React?',
    ans: 'Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. In order to use them you add a ref attribute to your component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.'
  },
  {
    key:15,
    ques: 'What Are Keys In React?',
    ans: 'Keys are what help React keep track of what items have changed, been added, or been removed from a list.'
  },
  {
    key:16,
    ques: 'What is a Controlled Component?',
    ans: 'A controlled component is a component where React is in control and is the single source of truth for the form data. As you can see below, usernamedoesn’t live in the DOM but instead lives in our component state.'
  },
  {
    key: 17,
    ques: 'What is an Uncontrolled Component?',
    ans: 'An uncontrolled component is where your form data is handled by the DOM, instead of inside your React component.'
  },
  {
    key:18,
    ques: 'Is React Native Like Other Hybrid Apps Which Are Actually Slower Than Native Mobile Apps?',
    ans: 'React Native compiles a real mobile and is engineered for high performance, a good example of a high performance app is Facebook IOS app; it uses React Native and IOS users have a pretty good idea of how smoothly the Facebook app works on IOS devices.'
  },
  {
    key:19,
    ques: 'Do We Use The Same Code Base For Android And Ios?',
    ans: 'Yes, we use the same code base for Android and IOS and React take cares of the native components translations. For example: A React Native ScrollView uses native UiScrollView on IOS and ScrollView on Android.'
  },
  {
    key:20,
    ques: 'Can We Use React Native Code Alongside With React Native?',
    ans: 'Yes, we can use Native code alongside JavaScript to get our tasks done, so the limitations in previous such platforms such as Titanium will be no more.'
  },
  {
    key:21,
    ques: 'Is React Native A Native Mobile App?',
    ans: 'Yes, React Native Compiles a native mobile app using native app components. It’s neither a Hybrid Mobile app that uses WebView to run the HTML5 app or a mobile web app. React Native builds a real mobile app that’s indistinguishable from an app built using Objective-C or Java.'
  },
  {
    key:22,
    ques: 'Difference Between React And React Native?',
    ans: 'ReactJs is a JavaScript Library used for developing apps in HTML5 using JavaScript as the developing language and React Native is used to develop native mobile apps using JavaScript as the development language.'
  },
  {
    key:23,
    ques: 'Which node_modules will run in React Native? How can we test for this?',
    ans: 'Any pure JavaScript library that does not rely on Node.js runtime modules, and does not rely on web-specific concepts (e.g. window.location.pathname) will run fine in React Native. But we have to be mindful because there’s no way to test for this with Babel—it doesn’t scan these libraries for offending dependencies. A module that uses window.location.pathname may fail at runtime in an unexpected place.'
  },
  {
    key:24,
    ques: 'Why do we use StyleSheet.create?',
    ans: 'StyleSheet is a module built into React Native that allows us to create immutable stylesheet references. We can pass regular style objects into the create() method, and the module will freeze the objects, and assign each one an ID. This has two benefits: it allows us to avoid creating a new style object every render pass (which could lead to degradation of render performance), and it allows us to send the object across the asynchronous bridge only once (since these style objects map directly to native styles, they need to be passed across).'
  },
  {
    key:25,
    ques: 'What is the relationship between React Native and React?',
    ans: 'React Native is built using React. React, at its core, is a library for “diffing” a virtual DOM and rendering this DOM to a screen with minimal operations. React, by default, does not have an opinion about which nodes are in its virtual DOM tree. Instead, it simply has algorithms that can determine changes in the tree and re-render. React on the web provides its own node primitives (<div>, <span>, etc), which are the building blocks for web applications. But new node primitives can be defined, as React Native has done. React Native defines its own primitives (<View>, <Image>, etc) which do not render HTML elements but instead map to native views, like UIView and UIImageView. It implements a bridge that allows the JavaScript runtime to communicate asynchronously with the native runtime. React itself provides the tree diffing and rendering infrastructure that allows React Native to work.'
  },
];

class index extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      keys: '',
    };
  }

  toggleModal = key => {
    this.setState({isModalVisible: !this.state.isModalVisible, keys: key});
  };

  render() {
    let keySelect = this.state.keys;
    return (
      <View style={{flex: 1}}>
          <ScrollView>
        {list.map(item => (
          <View>
            <TouchableOpacity
              onPress={() => this.toggleModal(item.key)}
              style={styles.ques}>
              <Text style={styles.no}>{item.key}.</Text>
              <Text style={styles.quesTxt}>{item.ques}</Text>
            </TouchableOpacity>
            {keySelect === item.key ? (
              <Modal isVisible={this.state.isModalVisible}>
                <TouchableOpacity onPress={this.toggleModal} style={styles.ans}>
                  <View style={styles.ques}>
                    <Text style={[styles.no, {color: colors.black}]}>
                      {item.key}.
                    </Text>
                    <Text style={[styles.quesTxt, {color: colors.black}]}>
                      {item.ques}
                    </Text>
                  </View>
                  <Text style={styles.ansTxt}>{item.ans}</Text>
                </TouchableOpacity>
              </Modal>
            ) : null}
            
          </View>
        ))}

</ScrollView>
      </View>
    );
  }
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  no: {
    fontSize: 20,
    color: colors.primary,
  },
  ques: {
    margin: 10,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 4,
    flexDirection: 'row',
  },
  quesTxt: {
    fontSize: 20,
    color: colors.primary,
    marginLeft: 8,
    width:"90%"
  },
  ans: {backgroundColor: 'white', padding: 20, borderRadius: 8},
  ansTxt: {fontSize: 20, color: colors.primary},
});
