import React, { Component } from 'react'
import { Container, Spinner, List, Content } from 'native-base';
import BusinessItem from './BusinessItem';

export default class ListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isReady: false,
       businessArray: []
    }
    console.log(props)
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
            isReady: true,
            businessArray: json.businesses
          })
        })
      })
    })
  }

  render() {
    if(this.state.isReady === false){
      return (
        <Spinner color="blue"></Spinner>
      )
    }
    return (
      <Container>
        <Content>
          <List>
            {
              this.state.businessArray.map((business)=>{
                let distanceNum = Number(business.distance)
                distanceNum = distanceNum / 1000
                let roundedNum = Math.round(distanceNum * 100) / 100
                return (<BusinessItem key={business.id}
                        bussinessId={business.id}
                        businessName={business.name}
                        distance={roundedNum + " kilometers away"}
                        rating={business.rating}
                        price={business.price}
                        imgUrl={business.image_url}
                        url={business.url}
                        category={business.categories[0].title}
                        navigation={this.props.navigation}/>)
              })
            }
          </List>
        </Content>
      </Container>
    )
  }
}

