import React,{ useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Client} from '../container/Client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';
 
const Feed = () => {
  const [loading, setLoading]=useState(false);
  const [pins, setPins]=useState(null);
  const {categoryId} = useParams();

  useEffect(()=>{
    setLoading(true);
      if(categoryId){
        const query= searchQuery(categoryId);
        Client.fetch(query)
        .then((data)=>{
          setPins(data);
          setLoading(false);
        })
      }else{
          Client.fetch(feedQuery) 
           .then((data)=>{
            setPins(data);
            setLoading(false);
          })
      }
  },[categoryId])

 
      if(loading)return <Spinner message='We are adding new Ideas to your Feed' />
      if(!pins?.length)return <h2>No Pins Available</h2>
      
      return (
    <div>
    {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed
