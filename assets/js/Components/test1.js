import React,{useState,createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider= props =>{
const[movies,setMovies]=useState([
    { name:"test",
      price:"5",
      id:55
    },
    { name:"test2",
      price:"2",
      id:22
    },
  ]);
  return(
    <MovieContext.Provider value={'hello'}>
      {props.children}
    </MovieContext.Provider>
  );
}