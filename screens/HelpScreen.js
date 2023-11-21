import * as React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';
import Colours from '../constants/Colours';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextH3, TextListItem } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';

export default function HelpScreen(props) {

  //State management

  //Create state variable for the font size (default to the value set in the setting.js file)
  // const [variableName, setVariableName] = React.useState("default")
  const [fontSizeModifier, setFontSizeModifier] = React.useState(Settings.fontSizeModifier)

  //changeFontSize(-0.1)
  function changeFontSize(sizeModifier){

    //TODO: validate the font size (e.g. not negative)

    //update the global settings value
    Settings.fontSizeModifier += sizeModifier

    //update the state variable to re-render the screen (update the UI)
    setFontSizeModifier(Settings.fontSizeModifier)
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

        <View>
          
          <TextH1 style={{marginTop:0}}>Help topics</TextH1>

          <TextH2>Change settings</TextH2>

          <TextParagraph>Here are some basic settings to make the app more comfortable to use.</TextParagraph>

          <TextH3>Font size</TextH3>

          <View style={Styles.helpButtonContainer}>
            <MyButton
              text="- Smaller"
              type="default"      // default*|major|minor
              size="medium"      // small|medium*|large
              onPress={() => {changeFontSize(-0.1)}}
              buttonStyle={Styles.helpButton}
            />
            <MyButton
              text="+ Bigger"
              type="default"      // default*|major|minor
              size="medium"      // small|medium*|large
              onPress={() => {changeFontSize(+0.1)}}
              buttonStyle={Styles.helpButton}
            />
        </View>

          <TextH2>Main tab navigation</TextH2>

          <TextParagraph>The main navigation bar is at the bottom of the app and shows the major screens/functions.</TextParagraph>
          <TextParagraph>Each tab links to an important screen.</TextParagraph>

          <TextH3>Actions:</TextH3>

          <TextListItem>Home - The landing page of the app.</TextListItem>
          <TextListItem>View People - List all the people</TextListItem>
          <TextListItem>Add Person - Add a new person</TextListItem>
          <TextListItem>Help - View this help content</TextListItem>
          
          <TextH2>Home Screen</TextH2>
          <TextParagraph>The home screen of the application that user sees when first opening the app.</TextParagraph>

          <TextH2>Help Screen</TextH2>
          <TextParagraph>The help screen displays a list of helpful content about the app.</TextParagraph>

          <TextH2>View all Screen</TextH2>
          <TextParagraph>The view all people screen displays a list of all the peope.</TextParagraph>

          <TextH2>View person Screen</TextH2>
          <TextParagraph>View person screen displays the info of a particular person.</TextParagraph>

          <TextH2>Add person Screen</TextH2>
          <TextParagraph>Add person screen with buttons and text boxes to input persons details.</TextParagraph>

          <TextH2>Edit person Screen</TextH2>
          <TextParagraph>Edit person screen which displays a particular person info with the ability to edit them.</TextParagraph>

          <TextH2>Wanna go home?</TextH2>

          <Pressable onPress={() => props.navigation.replace('Root')}>
            <TextParagraph style={{marginVertical: 10, color: Colours.tabLabelSelected}}>Click here to go home...</TextParagraph>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}