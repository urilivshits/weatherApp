import React, {Component} from "react";
import General from "./General";
import MoreDetails from "./MoreDetails";

class App extends Component {
  constructor () {
    super () 
    this.state = {
      latitude: 42.15,
      longitude: 24.75,
      locationFetched: false,
      searchfield: "",
      currentWeatherData: [],
      extraWeatherData: [],
      moreDetailsShown: false
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
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=c2f6d99c1021899a45402a69657c35aa`)
      .then(response => response.json())
      .then(fetchedData => this.setState({currentWeatherData: fetchedData}));
      console.log("weather fetched");
  
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=current,minutely,alerts&appid=c2f6d99c1021899a45402a69657c35aa`)
      .then(response => response.json())
      .then(fetchedextraWeatherData => this.setState({extraWeatherData: fetchedextraWeatherData}));
      console.log("hourly weather fetched");
  };
  
  fetchNewLocation = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchfield}&APPID=c2f6d99c1021899a45402a69657c35aa`)
    .then(response => response.ok ? response.json() : console.log("response not ok"))
    .then(fetchedData => fetchedData !== undefined ? this.setState({currentWeatherData: fetchedData}) : console.log("city not found"));
    console.log("weather fetched");

    setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentWeatherData.coord.lat}&lon=${this.state.currentWeatherData.coord.lon}&exclude=current,minutely,alerts&appid=c2f6d99c1021899a45402a69657c35aa`)
      .then(response => response.json())
      .then(fetchedextraWeatherData => this.setState({extraWeatherData: fetchedextraWeatherData}));
      console.log("hourly weather fetched");
    }, 200);
  };

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  };

  toggleDetails = () => {
    this.state.moreDetailsShown ? this.setState({moreDetailsShown: false}) : this.setState({moreDetailsShown: true}) 
  };

  render () {
    if (this.state.currentWeatherData.length === 0 || this.state.extraWeatherData.length === 0) {
      !this.state.locationFetched ? this.fetchLocation() : this.fetchWeather();
      return <p>Waiting for the data to fetch</p>
    }
    else {
      console.log(this.state.latitude);
      console.log(this.state.longitude);
      console.log(this.state.currentWeatherData);
      console.log(this.state.extraWeatherData);
      console.log("page rendered");
      console.log(this.state.searchfield);
      
      return (
        <div className="App tc dib">
            <General weather={this.state.currentWeatherData} searchChange={this.onSearchChange} searchSubmit={this.fetchNewLocation}/>
            <button onClick={this.toggleDetails}>More details ></button>
            {
              this.state.moreDetailsShown && (
                <MoreDetails weather={this.state.currentWeatherData} extra={this.state.extraWeatherData}/>
              )
            }
       </div>
      )
    }
  }
}

export default App;