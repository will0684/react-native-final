import React, { Component } from 'react'
import { Container } from 'native-base';

export default class ListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isReady: false,
       businessArray: []
    }
  }

  static navigationOptions = {
    title: 'Nearby Restaurants',
  };

  async componentWillMount(){
    let coords
    let options = {
      headers: {
        'Authorization': 'Bearer Qe7erPKtpDwXNB3yC4Rj5cLuZ6aEGcADzmqPP0nd8LodFNeFNmCcwKZjrECi9K6hS5kvV5CLMnrk4yDpJc1N5yk-LhAmHL9llrAdFEUeBcN_OdtM3gPAR0VI7zQIXHYx'
      }
    }
    await navigator.geolocation.getCurrentPosition((success)=>{
      console.log(success.coords)
      coords = success.coords
      console.log(coords)
      fetch('https://api.yelp.com/v3/businesses/search?latitude=' + coords.latitude + '&longitude=' + coords.longitude + '&sort_by=distance', options)
      .then((response) => {
        response = response.json()
        .then((json)=>{
          this.setState({
            businessArray: json.businesses
          })
        })
      })
    })
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

