import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  //State management
  const [isLogoColour, setIsLogoColour] = React.useState(true)

  //toggle the value of isLogoColour (true/false)
  function toggleLogo(){
    setIsLogoColour(!isLogoColour)
  }

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
          <Pressable onPress={toggleLogo}>
            <Image 
            // conditon ? true : false
            source={
              isLogoColour 
                ? require("../assets/images/roi-logo.jpg") 
                : require("../assets/images/roi-logo-monochrome.jpg")
            }
            style={Styles.homeLogo}
            />
          </Pressable>
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

        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: 'lightgray', fontSize: 14 }}>Developed by</Text>
          <Text style={{ fontSize: 18 }}>Harrison Townend</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}