/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class CookieJarOfAwesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      returnText: ''
    }
  }

  sendAwesome() {
    console.log('sending awesome');
    fetch('http://localhost:3000/awesome', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ awesome: this.state.text })
    })
      .then(response => response.json())
      .then(json => {
        if (json.inserted) {
          this.setState({ 
            returnText: 'Successfully stored. Awesome!',
            text: ''
          });
          // TODO: Make it so that this isn't being done
          this.forceUpdate();
        }
      })
      .catch(err => {
        this.setState({ 
          returnText: 'Problem saving (not awesome): ' + err,
          text: ''
        });
      });
  }

  getAwesome() {
    fetch('http://localhost:3000/awesome')
      .then(response => response.json())
      .then(json => {
        const awesomes = json.reduce((prev, curr) => prev + curr.awesome + '\n', '');
        this.setState({ returnText: awesomes });
        this.forceUpdate();
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Cookie Jar of Awesome!
        </Text>
        <Text style={styles.instructions}>
          Enter in something awesome that you did!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight 
          onPress={this.sendAwesome.bind(this)}>
          <Text>
            Awesome
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.getAwesome.bind(this)}>
          <Text>Get Awesome!</Text>
        </TouchableHighlight>
        <Text>
          {this.state.returnText}
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
  button: {
    backgroundColor: '#222222',
    color: '#ffffff'
  }
});

AppRegistry.registerComponent('CookieJarOfAwesome', () => CookieJarOfAwesome);
