import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const MultiBaseScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      <Text style={gStyle.text[theme]}>Multi screen content area</Text>

      <View style={gStyle.spacer64} />

      <View style={gStyle.coursesDisplay}>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel2')}
            text="renew Gearco"
          />
        </View>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel3')}
            text="Go to level 3"
          />
        </View>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel2')}
            text="Go to level 4"
          />
        </View>
      </View>
      <View style={gStyle.spacer64} />

      <View style={gStyle.coursesDisplay}>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel2')}
            text="renew Gearco"
          />
        </View>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel3')}
            text="Go to level 3"
          />
        </View>
        <View style={gStyle.individualCourses}>
          <Touch
            onPress={() => navigation.navigate('MultiLevel2')}
            text="Go to level 4"
          />
        </View>
      </View>
    </ScrollView>
  );
};

MultiBaseScreen.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Learn GearCo'
};

MultiBaseScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBaseScreen;
