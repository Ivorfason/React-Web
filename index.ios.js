/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

class ReactNativeWebExample extends Component {

  componentWillMount() {
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Ivor's React-Web Project!
        </Text>
        <Text style={styles.instructions} onPress={() => this.setState({counter: this.state.counter + 1})}>
          Click Me!
        </Text>
        <Text style={styles.instructions}>
          {this.state.counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeWebExample', () => ReactNativeWebExample);

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('ReactNativeWebExample', {
    rootTag: app
  })
}