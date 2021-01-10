import React, { useState } from 'react';
import Client from '../../service/Client';
import { debounce } from '../../utils/helper';
import './search.scss';
import { Img, Loading, Notification } from '../../common';
const initialState = {
  data: null,
  loading: false,
  searchTearm: null
};
const Search = () => {

  const [ state, setState] = useState(initialState);
  
  const getResult = async (searchTearm) => {
    if(!searchTearm.length) {
      setState({
        ...state,
        searchTearm: null,
        data: null
      });
      return;
    }
    setState({
      ...state,
      loading: true,
      data: [],
      searchTearm,
    })
    try {
      let { data : { data }}  = await new Client().GET(`gifs/search?api_key=8usxHZonGGfWF0NEYGuo0mQYXtg7tgu0&q=${searchTearm}`);
      console.log(data, "####");
      setState({
        ...state,
        loading: false,
        data,
      });
    } catch(error) {
      Notification("error", "Error while fetching gifs", "Seems like something went wrong while fetchig search result. Please try again");
      setState({
        ...state,
        loading: false,
        searchTearm: null
      });
    }
  }

  const copyLink = (url, id) => {
    console.log(url, id);
  }

  const getOptions = () => {
    const { data, searchTearm} = state;
    if(!searchTearm && !data) return <div className="indication"> Start typing to fetch results...</div>
    if(!data.length) return <div className="no-result">No result found</div>
    return (
      <a className="container" >
       {data.map(({id, title, images: {fixed_height: {url}}}) => (
         <div className="gif" tabIndex="1">
           <Img src={url} width={200} height={200}/>
           <div className="details">
              <h2 className="title">{title}</h2>
              <div className="action">
                <button id={`${id}${url}`} onClick={()=>copyLink(url, id)}>Copy url</button> 
                <button><a href={url} target="_blank" >Redirect</a></button>
              </div>
           </div>
         </div>
       ))}
      </a>
    );
  }

  let deboucedFetch = debounce(getResult, 300)
  const { loading, data } = state;
  console.log(data, "Data");
  return (
    <div className="search-panel">
      <div className="dropdown">
        <div id="myDropdown" className="dropdown-content show">
          <input type="text" placeholder="Search.." id="myInput" onKeyUp={({target: { value }})=> deboucedFetch(value)} tabIndex="1"/>
          {loading && <Loading />}
          {!loading && getOptions()}
        </div>
      </div>
    </div>
    
  )
}

export default Search;