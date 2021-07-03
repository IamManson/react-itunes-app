import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default function Search({searchItunes, error, loading}) {
    return (
        //Search Bar
        <div className="SearchWrapper"> 
                <div className="SearchContent">
                  <div className="SearchHeader">
                    <h1 className="SearchHeading">SEARCH</h1>
        <div className="SearchForm">
            <form onSubmit={searchItunes}>
                {/*User title input*/}
                <input type="text" name="term" placeholder="Search titles or artists..."></input>
                {/*Dropdown to select media type*/}
                <select name="media">
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="tvShow">TV Show</option>
                    <option value="music">Music</option>
                    <option value="podcast">Podcast</option>
                    <option value="musicVideo">Music Video</option>
                    <option value="audiobook">Audio Book</option>
                    <option value="ebook">E Book</option>
                </select>
                {/*Search Button*/}
                <button>Search</button>
            </form>
        
        {/*Loading spinner*/}
        <div className="LoadingSpinner">
            {loading && <Spinner animation="border" variant="light" />}
        </div>

        {error && <p className="ResultError">{error}</p>}

        </div>
        </div>
        </div>
        </div>
    )
}