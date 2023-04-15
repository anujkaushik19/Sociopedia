import React from 'react'

import classes from './Home.module.css'

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar/Sidebar';
import  Feed  from '../components/Feed/Feed';
import RightBar from '../components/RightBar/RightBar';

function Home(){
    
    return <div>
         <Topbar/>
         <div className={classes.container}>
            <Sidebar/>
            <Feed/>
            <RightBar/>
         </div>
    </div>
}

export default Home;