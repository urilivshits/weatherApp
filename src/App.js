import React, {Component} from "react";
import General from "./General";
import {myApi} from "./myApi";
import "./App.css";

class App extends Component {
  constructor (props) {
    super (props) 
    this.state = {
      latitude: 42.15,
      longitude: 24.75,
      locationFetched: false,
      searchfield: "",
      currentWeatherData: [],
      extraWeatherData: [],
      moreDetailsShown: false,
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
  };
  
  fetchWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=${myApi.key}`)
      .then(response => response.json())
      .then(fetchedData => this.setState({currentWeatherData: fetchedData}));
      console.log("weather fetched");
  
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=current,minutely,alerts&appid=${myApi.key}`)
      .then(response => response.json())
      .then(fetchedextraWeatherData => this.setState({extraWeatherData: fetchedextraWeatherData}));
      console.log("hourly weather fetched");
  };
  
  fetchNewLocation = (event) => {
    event.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchfield}&APPID=${myApi.key}`)
    .then(response => response.ok ? response.json() : console.log("response not ok"))
    .then(fetchedData => fetchedData !== undefined ? this.setState({currentWeatherData: fetchedData, searchfield: ""}) : console.log("city not found"));
    console.log("weather fetched");

    setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentWeatherData.coord.lat}&lon=${this.state.currentWeatherData.coord.lon}&exclude=current,minutely,alerts&appid=${myApi.key}`)
      .then(response => response.json())
      .then(fetchedextraWeatherData => this.setState({extraWeatherData: fetchedextraWeatherData}));
      event.target.reset();
      console.log("hourly weather fetched");
    }, 200);
  };

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  };

  render () {
    if (this.state.currentWeatherData.length === 0 || this.state.extraWeatherData.length === 0) {
      !this.state.locationFetched ? this.fetchLocation() : this.fetchWeather();
      return <p>Waiting for the data to fetch</p>
    }
    else {
      // console.log(this.state.currentWeatherData);
      // console.log(this.state.extraWeatherData);
      // console.log(this.state.searchfield);
      console.log("page rendered");
      
      return (
        <div className="App">
            <General 
            weather={this.state.currentWeatherData} 
            extra={this.state.extraWeatherData} 
            searchChange={this.onSearchChange} 
            searchSubmit={this.fetchNewLocation} 
            searchField={this.state.searchfield} 
            />
       </div>
      )
    }
  }
}

export default App;