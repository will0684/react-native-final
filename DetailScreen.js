import React, { Component } from 'react'
import { Container, Image, Thumbnail, Text } from 'native-base';

export default class DetailScreen extends Component {
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
    return (
      <Container>
        <Thumbnail large source={{ uri: imageUrl }}/>
        <Text>{ businessName }</Text>
        <Text>Distance From You: { distance }</Text>
        <Text>Rating: { rating }</Text>
        <Text>Price: { price }</Text>
        <Text>Visit Site: { url }</Text>
      </Container>
    )
  }
}
