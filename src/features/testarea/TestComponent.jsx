import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button, Icon } from "semantic-ui-react";
import Script from "react-load-script";
import GoogleMapReact from 'google-map-react';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

const Marker = () => <Icon name='marker' size='big' color='red' />
class TestComponent extends Component {
  state = {
    address: "",
    scriptLoaded: false
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  handleScriptLoaded = () => {
    console.log('handle script');
    
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (

       // Important! Always set the container height explicitly
       <div style={{ height: '300px', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: 'AIzaSyCBqywI9t9B1zntTVfaUoX3LAyevgywtzE' }}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
       >
         <Marker
           lat={59.955413}
           lng={30.337844}
           text={'Kreyser Avrora'}
         />
       </GoogleMapReact>
     </div>

    /*   <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBqywI9t9B1zntTVfaUoX3LAyevgywtzE&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green">
          Increment
        </Button>
        <Button onClick={decrementCounter} color="red">
          Decrement
        </Button>

        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
        {this.state.scriptLoaded && 
          <PlacesAutocomplete inputProps={inputProps} />}
          <button type="submit">Submit</button>
        </form>
      </div> */
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
