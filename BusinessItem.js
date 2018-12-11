import React, { Component } from 'react'
import { ListItem, Text, Row } from 'native-base'

export default class BusinessItem extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <ListItem onPress={() => this.props.navigation.navigate('DetailScreen',{
              businesName: this.props.businessName,
              distance: this.props.distance,
              rating: this.props.rating,
              price: this.props.price,
              imgUrl: this.props.imgUrl,
              url: this.props.url,
              category: this.props.category
      })}>
        <Row>
          <Text>{this.props.businessName}</Text>
        </Row>
        <Row>
          <Text>{this.props.distance}</Text>
        </Row>
      </ListItem>
    )
  }
}
