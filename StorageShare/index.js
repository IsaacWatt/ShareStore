import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { ARKit } from 'react-native-arkit';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'ios' && <ARKit
        style={{ flex: 1 }}
        debug // debug mode will show feature points detected and 3D axis
        planeDetection // turn on plane detection
        lightEstimation // turn on light estimation
      >
        <ARKit.Box
          pos={{ x: 0, y: 0, z: 0 }}
          shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
        />
      </ARKit>
        }
        <AppNavigator />
      </View>
    );
  }

  // render() {
  //   if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
  //     return (
  //       <AppLoading
  //         startAsync={this._loadResourcesAsync}
  //         onError={this._handleLoadingError}
  //         onFinish={this._handleFinishLoading}
  //       />
  //     );
  //   } else {
  //     return (
  //       <View style={styles.container}>
  //         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
  //         {Platform.OS === 'ios' && <ARKit
  //         style={{ flex: 1 }}
  //         debug // debug mode will show feature points detected and 3D axis
  //         planeDetection // turn on plane detection
  //         lightEstimation // turn on light estimation
  //       >
  //         <ARKit.Box
  //           pos={{ x: 0, y: 0, z: 0 }}
  //           shape={{ width: 0.1, height: 0.1, length: 0.1, chamfer: 0.01 }}
  //         />
  //       </ARKit>
  //         }
  //         <AppNavigator />
  //       </View>
  //     );
  //  }
  //}

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
  },
});
