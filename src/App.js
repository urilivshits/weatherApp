import React, {Component} from "react";
import General from "./General";

class App extends Component {
  constructor () {
    super () 
    this.state = {
      latitude: 42.15,
      longitude: 24.75,
      locationFetched: false,
      weatherData: []
    }
  };

  fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude, locationFetched: true}), error => {
        if (error.PERMISSION_DENIED) {
          console.log("position denied");
          this.setState({locationFetched: true});
        }
        else if (error.POSITION_UNAVAILABLE) {
          console.log("position unavailable");
          this.setState({locationFetched: true});
        }
        else if (error.TIMEOUT) {
          console.log("position timeout");
          this.setState({locationFetched: true});
        }
        else if (error.UNKNOWN_ERROR) {
          console.log("unknown error");
          this.setState({locationFetched: true});
        }
      });
      console.log("coords fetched");
    }
    else if (!navigator.geolocation) {
      console.log("coords not supported by the browser");
      return;
    }
  }
  
  fetchWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=c2f6d99c1021899a45402a69657c35aa`)
    .then(response => response.json())
    .then(fetchedData => this.setState({weatherData: fetchedData}));
    console.log("weather fetched");
  }
    
  fetchNewLocation = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c2f6d99c1021899a45402a69657c35aa`)
    .then(response => response.json())
    .then(fetchedData => this.setState({weatherData: fetchedData}));
    console.log("weather fetched");
  }
  // componentDidUpdate () {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=c2f6d99c1021899a45402a69657c35aa`)
  //   .then(response => response.json())
  //   .then(fetchedData => this.setState({weatherData: fetchedData}));
  //   console.log(2, "weather data fetched");
  // }
  
  // componentDidMount () {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=c2f6d99c1021899a45402a69657c35aa`)
  //   .then(response => response.json())
  //   .then(fetchedData => this.setState({weatherData: fetchedData}));
  //   console.log(2, "weather data fetched");
  // }

  render () {
    if (this.state.weatherData.length === 0) {
      !this.state.locationFetched ? this.fetchLocation() : this.fetchWeather();
      return <p>Waiting for the data to fetch</p>
    }
    else {
      console.log(this.state.latitude);
      console.log(this.state.longitude);
      console.log(this.state.weatherData);
      console.log("page rendered");
      
      return (
        <div className="App">
            <button onClick={this.fetchNewLocation}>click</button>
            {/* <p>latitude: {this.state.latitude}</p>
            <p>longitude: {this.state.longitude}</p>
            <p>location: {this.state.weatherData.name}</p> */}
            <General weather={this.state.weatherData}/>
       </div>
      )
    }
  }
}

export default App;