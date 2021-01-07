import { getOptions } from 'highcharts';
import React, { useState } from 'react';
import Client from '../../service/Client';
import { debounce } from '../../utils/helper';
import gif from '../../assets/download.png';
import './search.scss';
import { Loading } from '../../common';
const initialState = {
  data: [],
  loading: true
};
const Search = () => {

  const [ state, setState] = useState(initialState);
  
  const setLoading = (value) => setState({
    ...state,
    loading: value
  });
  
  const getResult = async (searchTearm) => {
    setLoading(true);
    try {
      let result  = await new Client().GET(`gifs/search?api_key=8usxHZonGGfWF0NEYGuo0mQYXtg7tgu0&q=${searchTearm}`);
      console.log(result)
    } catch(error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const getOptions = () => {

    return (
      <>
        <a href="#about">About</a>
        <a href="#base">Base</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <a href="#custom">Custom</a>
        <a href="#support">Support</a>
        <a href="#tools">Tools</a>
      </>
    );
  }

  let deboucedFetch = debounce(getResult, 300)
  const { loading, data } = state;
  return (
    <div className="search-panel">
      <div className="dropdown">
        <div id="myDropdown" className="dropdown-content show">
          <input type="text" placeholder="Search.." id="myInput" onKeyUp={({target: { value }})=> deboucedFetch(value)} />
          {loading && <Loading />}
          {!loading && getOptions()}
        </div>
      </div>
    </div>
    
  )
}

export default Search;