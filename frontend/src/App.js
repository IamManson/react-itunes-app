import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//Style sheets
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Search from './Components/Search';
import SearchResults from './Components/SearchResults';
import Favourites from './Components/Favourites';
import Menu from './Components/Menu';

//Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faTrash);

//Function to get API data
function getApiData(url) {
  return fetch(url).then((res) => res.json());
}

class App extends React.Component {

  //Constructor State
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      favourites: [],
      loading: false,
      error: "Start New Search"
    };

    //Binding App Function
    this.addFavourites = this.addFavourites.bind(this);
    this.deleteFavourite = this.deleteFavourite.bind(this);
    this.searchItunes = this.searchItunes.bind(this);
  };

  //ON LOAD
  componentDidMount = () => {
    getApiData(`/api/myFavourites`)
    .then(
      (result) => {
        console.log('Result');
        this.setState({
          favourites: result
        });
      },
      (error) => {
        console.log(error);
        this.setState({
            error,
            favourites: []
        });
      }
    )
  };

  //POST favourite
  addFavourites = (result) => {
    
    let trackId_ = result.trackId
    let trackName_ = result.trackName
    let artistName_ = result.artistName
    let kind_ = result.kind


    if(trackId_) {
      //add entity
      fetch("/api/myFavourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ trackId: trackId_, trackName: trackName_, artistName: artistName_, kind: kind_ })
        })
        .then(res => res.json())
        .then(response =>
          alert('Successful!', JSON.stringify(response)))
        .catch(error => console.log(`${error}`));
        window.location.reload();
      } else {
        alert("Update ID please.");
    }
  }

  //DELETE favourite
  deleteFavourite = () => {

    //Declaring variable with value from the HTML input
    let trackId_ = document.getElementById("id").value

    if(trackId_) {
      //delete entity
      fetch("/api/myFavourites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ trackId: trackId_ })
        })
        .then(res => res.json())
        .then(response =>
          alert('Successful!', JSON.stringify(response)))
        .catch(error => console.log(`${error}`));
        window.location.reload();
      } else {
        alert("Update ID please.");
    }
  }

  //SearchItunes function that will action users search
  searchItunes = async (e) => { 
    
    this.setState({ loading: true, results: [] }); 

    e.preventDefault(); //Prevent page reload on form submit.
    const term = e.target.term.value.replace(" ", "+" ).trim().toLowerCase(); //Getting the Forms input value and concatinating and trimming.
    const media = e.target.media.value;  //Getting the media value

    if (term && media) { //If term/media both return true/have inputs ->
      const api_call = await fetch(`/api/search/${term}/${media}`); //Making the API call with the term/media input varibles, and setting the country to ZA and limit 50.

      if (api_call.status !== 200) { //Check if api_call is not successful -> send error.
        this.setState({
          loading: false,
          error: "Search failed."
        });
        console.log(api_call.status);
        return;    
      }

      const data = await api_call.json(); //Parsing the JSON data recieved.

      if (data.resultCount === 0) { //If nothing is returned -> send error.
        this.setState({
          loading: false,
          error: "Search did not find anything."
        });

      } else { //If inputs match something in database -> setState data.results array to results.
          this.setState({
            results: data.results,
            loading: false,
            error: ""
          });
      }
      
    } else { //If inputs were empty -> send error.
      this.setState({
        loading: false,
        error: "Please enter a search."
      });
    }

  }

  render() {
    return (
      //BrowserRouter so that user can toggle between pages
      <Router>
      <div>
        {/*Navbar Menu component*/}
        <Menu />
        <Route path='/' exact={true} render= {(props) => <Search 
                searchItunes={this.searchItunes}
                error={this.state.error}
                loading={this.state.loading}
                  />} /> 

        {/*Search results component*/}   
        <Route path='/' exact={true} render= {(props) => <SearchResults 
                results={this.state.results}
                addFavourites={this.addFavourites}
                favourites={this.state.favourites}
                deleteFavourite={this.deleteFavourite}
                  />} /> 

        {/*Favourites component*/}     
        <Route path='/myFavourites' exact={true} render= {(props) => <Favourites 
                favourites={this.state.favourites}
                deleteFavourite={this.deleteFavourite}
                   />} /> 
        </div>
        </Router>
    );
  }
  
}

export default App;
