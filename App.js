import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, Button, Text, Spinner, Title, Body } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Expo from "expo";
import ListScreen from "./ListScreen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if(this.state.isReady === true) {
      return (
        <Container>
          <Content>
            <Button style={styles.spacing}>
              <Text>Click Me!</Text>
            </Button>
          </Content>
        </Container>
      );
    }
    return (
      <Spinner color='blue'></Spinner>
    )
  }
}

const styles = StyleSheet.create({
  spacing: {
    flex: 1,
    alignSelf: "center",
    marginTop: 200
  }})

const AppNavigator = createStackNavigator({
    Home: App,
    ListScreen: ListScreen
    },
    {
      initialRouteName: "Home"
    });

export default createAppContainer(AppNavigator);