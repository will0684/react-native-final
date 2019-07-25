// ---------------------------------------------------//

// ------------- React Native Yelp App ---------------//
//                  DetailScreen.js

// ---------------------------------------------------//

//React Imports
import React from 'react'
import { Image, StyleSheet, Linking } from 'react-native'
import { Container, Thumbnail, Text, Content, Button } from 'native-base';
import Hyperlink from 'react-native-hyperlink'

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    title: 'Restaurant Details',
  };

  render() {
    const businessName = this.props.navigation.getParam('businessName') //Retrieve businessName
    const distance = this.props.navigation.getParam('distance') //Retrieve distance
    const rating = this.props.navigation.getParam('rating') //Retrieve Rating
    const price = this.props.navigation.getParam('price') //Retrieve price
    const imageUrl = this.props.navigation.getParam('imgUrl') //Retrieve image url
    const url = this.props.navigation.getParam('url') //retrieve url
    console.log(imageUrl)
    return (
      <Container>
        <Content>
          {/* Render Image in its container */}
          <Image style={{width: 400, height: 400, alignSelf: 'center'}} source={{ uri: imageUrl }}/>

          {/* Render business Name */}
          <Text style={styles.textSpacing}>{ businessName }</Text>

          {/* Render Distance from User */}
          <Text style={styles.textSpacing}>Distance From You: { distance }</Text>

          {/* Render Rating Value */}
          <Text style={styles.textSpacing}>Rating: { rating }</Text>

          {/* Render Average prices */}
          <Text style={styles.textSpacing}>Price: <Text style={styles.priceStyles}>{ price }</Text></Text>
          
          {/* Render button that navigates to Yelp page related to user selection */}
          <Button style={styles.buttonStyles} onPress={ ()=>{ Linking.openURL(url) } }>
            <Text>VIEW ON YELP</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
// Style Sheets
const styles = StyleSheet.create({
  textSpacing: {
    paddingLeft: 16,
    paddingBottom: 12
  },
  priceStyles: {
    color: 'green'
  },
  buttonStyles: {
    marginTop: 20,
    backgroundColor: '#C41200',
    alignSelf: 'center'
  }
})
