/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import {createSwitchNavigator, createAppContainer } from 'react-navigation';
//import SplashScreen from './src/components/splashscreen/SplashScreen';
import nodejs from 'nodejs-mobile-react-native';

class App extends React.Component {
  state = {}

  _isMounted = false;

  componentWillUnmount() {
    this._isMounted = false;
    nodejs.channel.removeListener("message");
  }

  componentDidMount() {
    this._isMounted = true;
    nodejs.start("main.js");
    console.log("Nodejs obj : ", nodejs);
    nodejs.channel.addListener(
        "message",
        (msg) => {
            alert("From RN : " + msg);
            //nodejs.channel.send(msg);
        }
    );
    nodejs.channel.send("nodejs did mount");
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Hello World!</Text>
        <Button title="Message Node"
          onPress={() => nodejs.channel.send('App message')}
        />
      </View>
    )
  }
};

/* const InitialNavigator = createSwitchNavigator({
  //Splash: SplashScreen,
  App: App,
}) */

const styles = StyleSheet.create({
});

//export default createAppContainer(InitialNavigator);
export default App;
