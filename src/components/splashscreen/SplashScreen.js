import React, { Component } from 'react';
import { View, Button } from 'react-native';
//import nodejs from 'nodejs-mobile-react-native';

class SplashScreen extends React.Component {
    _isMounted = false;

    state = {}

    componentWillUnmount() {
        this._isMounted = false;
        //nodejs.channel.removeListener("message");
    }

    async componentDidMount() {
        this._isMounted = true;
        /* nodejs.start("main.js");
        console.log("Nodejs obj : ", nodejs);
        nodejs.channel.addListener(
            "message",
            (msg) => {
                alert("From node : " + msg);
                nodejs.channel.send(msg);
            }
        ); */
    }

    render() {
        return (
            <View>
                <Button title="Message node 1"
                onPress={()=> alert("In Splash Screen")} 
                />
            </View>
        )
    }
};

export default SplashScreen;