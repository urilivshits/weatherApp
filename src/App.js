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
      weatherData: [],
      hourlyData: []
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
      .then(fetchedData => this.setState({weatherData: fetchedData}));
      console.log("weather fetched");
  
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=current,minutely,daily,alerts&appid=c2f6d99c1021899a45402a69657c35aa`)
      .then(response => response.json())
      .then(fetchedHourlyData => this.setState({hourlyData: fetchedHourlyData}));
      console.log("hourly weather fetched");
  };
  
  fetchNewLocation = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchfield}&APPID=c2f6d99c1021899a45402a69657c35aa`)
    .then(response => response.ok ? response.json() : console.log("response not ok"))
    .then(fetchedData => fetchedData !== undefined ? this.setState({weatherData: fetchedData}) : console.log("city not found"));
    console.log("weather fetched");

    setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.weatherData.coord.lat}&lon=${this.state.weatherData.coord.lon}&exclude=current,minutely,daily,alerts&appid=c2f6d99c1021899a45402a69657c35aa`)
      .then(response => response.json())
      .then(fetchedHourlyData => this.setState({hourlyData: fetchedHourlyData}));
      console.log("hourly weather fetched");
    }, 200);
  };

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  };

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
    if (this.state.weatherData.length === 0 || this.state.hourlyData.length === 0) {
      !this.state.locationFetched ? this.fetchLocation() : this.fetchWeather();
      return <p>Waiting for the data to fetch</p>
    }
    else {
      console.log(this.state.latitude);
      console.log(this.state.longitude);
      console.log(this.state.weatherData);
      console.log(this.state.hourlyData);
      console.log("page rendered");
      console.log(this.state.searchfield);
      
      return (
        <div className="App">
            {/* <p>latitude: {this.state.latitude}</p>
            <p>longitude: {this.state.longitude}</p>
            <p>location: {this.state.weatherData.name}</p> */}
            <General weather={this.state.weatherData} searchChange={this.onSearchChange} searchSubmit={this.fetchNewLocation}/>
            <MoreDetails weather={this.state.weatherData} hourly={this.state.hourlyData}/>
       </div>
      )
    }
  }
}

export default App;