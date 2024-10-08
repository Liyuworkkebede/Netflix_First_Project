import React from 'react'
import Row from "../Row/row.jsx"
import requests from '../../../Utils/requests';
function RowList() {
  return (
    <>
      
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="TopRatedMovies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="TvShow" fetchUrl={requests.fetchTvShow}/>
      
    </>
  );
}

export default RowList;