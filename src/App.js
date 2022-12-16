
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getPageFromTemplate } from './reduxStore/actions/pageActions';
import Home from './components/DoItYourSelf/Home';
import Main from './components/searchfilter/Main';
function App() {
  const [page,loadPage] =useState(true);
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getPageFromTemplate({templateId:"908989"}))
  },[])
  return (
    // <div className="App" style={{backgroundColor:"yellow",width:"400px", height:"400px"}}>
    <div className='App'>
     {page?<Home/>:<Main loadPage={loadPage}/>} 
    
    </div>
  );
}

export default App;
