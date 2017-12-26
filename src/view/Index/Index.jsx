import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import TopicList from '../../components/TopicList/TopicList';

import "./Index.css"
class Index extends Component{
    render(){
        return(
            <div className="index">
                <Navbar></Navbar>
                <TopicList></TopicList>
            </div>
        )
    }
}
export default Index;