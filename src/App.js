// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import React from 'react';
import unsplash from './api/unsplash';
import SerchBar from './components/SerchBar';
import ImageList from './components/ImageList';


class App extends React.Component {
  state={image:[]}
  onSearchSubmit=async(term)=>{
   
   const response=await unsplash.get('/search/photos/?client_id=oygN_yeCAdXmX8W4GNniDg9pIle5UKrqppJIri0qYJo',{
      params:{
        query:term

      }
      
    })
   
   this.setState({image:response.data.results});   
  }
  render(){
  return (
    <div className='ui container' style={{marginTop:'10px'}}>
    <SerchBar onSubmit={this.onSearchSubmit}/>
    <ImageList images={this.state.image}/>
     
    </div>
  );
  }
}

export default App;
