import React, { useEffect, useState} from 'react'
// import  {useEffect} from 'react';
import axios from "../../Utils/axios.js"
import requests from '../../Utils/requests.js';
import "./banner.css";
const Banner = () =>{
const [movie, setMovie] = useState({});
useEffect(() => {
    (async  () =>{
        try{
            const request = await axios.get(requests.fetchNetflixOriginals)
            console.log(requests);
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length)
            ]);
        }catch(error){
            console.log("error",error);
        }
    
    })()},[]);
    
  
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals)
  //     console.log(request);
  //     setMovie(
  //       request?.data?.results[
  //       Math.floor(Math.random() * request.data.results.length)
  //       ]
  //     )
  //     return request;
  //   }
  //   fetchData();
  // },[])
function truncate(str,n){
  return str?.length > n ? str.substr(0,n-1)+"...":str;

}

  return (
    <>
      <div
        className="banner"
        style={{
          BackgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
        }}
        
      >
        <div className='banner_content'>
        <h1 className='banner_title'>{movie?.title||movie.name || movie?.original_name}</h1>
<div className='banner_buttons'>
    <button className='banner_button play'>Play</button>
    <button className='banner_button'>My List</button>
</div>
<h1 className='banner_discription'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='banner_fade_bottom'></div>
      </div>
    </>
  );

}
export default Banner;