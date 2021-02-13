import React, { Component } from 'react'
import Axios from 'axios';
import ImgMediaCard from './MediaCard';

export class Lifecycle extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            confirm:0,
            recoverd:0,
            death:0
        }
    }
    componentDidMount() {
        Axios.get('https://covid19.mathdro.id/api')
        .then(res=>{
            console.log(res.data)
           this.setState({
               confirm: res.data.confirmed.value,
               recoverd:res.data.recovered.value,
               death:res.data.deaths.value
           })
        })
    }
    render() {
        return (
            <div>
                <li>{this.state.confirm}</li>
                <li>{this.state.recoverd}</li>
                <li>{this.state.death}</li>
                <ImgMediaCard  text='Confirmed Cases' value={this.state.confirm}  color='#F0C5D5'   />
            </div>
        )
    }
}

export default Lifecycle

