import React from 'react'
import Header from "../../Components/Header/Header.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import Banner from "../../Components/Banner/banner.jsx"
import RowList from "../../Components/Rows/RowList/RowList.jsx";

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <RowList/>
    <Footer/>
    </>
  )
}

export default Home;