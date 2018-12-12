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
    const businessName = this.props.navigation.getParam('businessName')
    const distance = this.props.navigation.getParam('distance')
    const rating = this.props.navigation.getParam('rating')
    const price = this.props.navigation.getParam('price')
    const imageUrl = this.props.navigation.getParam('imgUrl')
    const url = this.props.navigation.getParam('url')
    console.log(imageUrl)
    return (
      <Container>
        <Content>
          <Image style={{width: 400, height: 400, alignSelf: 'center'}} source={{ uri: imageUrl }}/>
          <Text style={styles.textSpacing}>{ businessName }</Text>
          <Text style={styles.textSpacing}>Distance From You: { distance }</Text>
          <Text style={styles.textSpacing}>Rating: { rating }</Text>
          <Text style={styles.textSpacing}>Price: <Text style={styles.priceStyles}>{ price }</Text></Text>
          <Button style={styles.buttonStyles} onPress={ ()=>{ Linking.openURL(url) } }>
            <Text>VIEW ON YELP</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

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
