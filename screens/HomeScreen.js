import * as React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  function showViewPeople() {
    props.navigation.replace('Root', {screen: 'People'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

        {/* logo */}

        <View style ={Styles.homeLogoContainer}>
          <Image 
          source={require("../assets/images/roi-logo.jpg")}
          style={Styles.homeLogo}
          />
        </View>

        {/* main heading */}
       
        
        <View>
          <Text style={Styles.homeHeading}>ROI HR Management System </Text>
          <Text style={Styles.homeHeading}> </Text>
        </View>
        
        {/* buttons */}

        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="View people"
            type="major"      // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showViewPeople}
            buttonStyle={Styles.homeButton}
          />
          <MyButton
            text="Help"
            type="default"      // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showHelp}
            buttonStyle={Styles.homeButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}