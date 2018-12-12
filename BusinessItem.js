// ---------------------------------------------------//

// ------------- React Native Yelp App ---------------//
//                   BusinessItem.js

// ---------------------------------------------------//

//React Imports
import React from 'react'
import { ListItem, Text, Row } from 'native-base'
//

//Custom Imports

//

export default class BusinessItem extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <ListItem onPress={() => this.props.navigation.navigate('DetailScreen',{
        // Generate list information from Yelp
              businesName: this.props.businessName, //name of business
              distance: this.props.distance, //distance from user
              rating: this.props.rating, //rating of restaurant
              price: this.props.price, //average prices
              imgUrl: this.props.imgUrl, //image
              url: this.props.url, //url
              category: this.props.category
      })}>
        <Row>
          {/* Generate Text Field within list for name */}
          <Text>{this.props.businessName}</Text> 
        </Row>
        <Row>
          {/* Generate text fields within list with distance */}
          <Text>{this.props.distance}</Text>
        </Row>
      </ListItem>
    )
  }
}

