import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';



export default function ImgMediaCard({text, value, color}) {
  

  return (
    <Card className='cardStyle'>
      <CardActionArea>
        <CardContent style={{backgroundColor:color}} >  
          <Typography gutterBottom variant="h5" component="h2" >
            {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:'20px'}}>
          <CountUp  start={0} end={value}
            duration={5}/>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}