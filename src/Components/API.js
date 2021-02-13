import React,{useState,useEffect} from 'react'
import '../App.css';
import Axios from 'axios';
import ImgMediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';

import { Doughnut,Bar } from 'react-chartjs-2';
function API() {
    const [confirmed,setconfirmed]=useState(0);
    const [recovered,setrecovered]=useState(0);
    const [deaths,setdeaths]=useState(0);
useEffect(() => {
    Axios.get('https://covid19.mathdro.id/api')
    .then(res=>{
        console.log(res.data)
       // console.log(res.data.confirmed)// data mei mojod att k name dhk k likhte get krne k lye .data k sath
        setconfirmed(res.data.confirmed.value) //set krwadia condirm k variable m
        //console.log(res.data.recovered)
        setrecovered(res.data.recovered.value)
        //console.log(res.data.deaths)
        setdeaths(res.data.deaths.value)
    })
    
},[])
    return (
        <div  >
            <Grid container spacing={3}>
           <Grid item xs={12} md={4} lg={4}>
        <ImgMediaCard  text='Confirmed Cases' value={confirmed}  color='#7FFFD4'   />       
      <ImgMediaCard text='Recovered Cases' value={recovered} color='#F5C9A2' />
      <ImgMediaCard text='Death Cases' value={deaths} color='red' />
        </Grid>
        <Grid item xs={12} md={8} lg={8} >
               {/* *****Graph*** phle npm i chart.js s kia then import kia donut chart phir data dedia */}

          <Doughnut  data={{
          labels: ['confirmed', 'Recovered', 'Deaths'], //x-axis
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#7FFFD4', '#F5C9A2', 'red'],
              data: [confirmed, recovered, deaths], //y-axis
             
            },
          ],
        }
       
       }
       />
        </Grid>
        </Grid>
            
           
      
           
        </div>
    )
}

export default API
