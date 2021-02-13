/* eslint-disable no-unused-vars */
import * as React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { gStyle } from '../constants';

// components
import NavigationBack from '../components/NavigationBack';

const MultiLevel2Screen = () => {
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: 'https://pingofd32th.github.io/pages/renewgc' }}
      style={{ marginTop: 20, flex: 1 }}
    />
  );
};

MultiLevel2Screen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => <NavigationBack navigation={navigation} />,
  headerRight: () => <View style={{ flex: 1 }} />,
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Renew Rent'
});

export default MultiLevel2Screen;
