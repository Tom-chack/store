import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import axios from "axios";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Catalog from "./components/Catalog";

import {categories} from "./data/categories";

import './App.css';




function App() {

  useEffect( () => {

    // axios.request({
    //   method: 'GET',
    //   url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    //   headers: {
    //     'x-rapidapi-host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
    //     'x-rapidapi-key': 'eada3e8980msh19c8e09d9fd69c6p16c18fjsn028dea57c350'
    //   }
    // }).then( (res) => {
    //   console.log( res.data );
    // }).catch( (error) => {
    //   console.error(error);
    // });
  
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}></Route>
         <Route path="/catalog" element={<Catalog categories={categories}/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
