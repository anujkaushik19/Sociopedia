import React from 'react'
import Post from '../Post/Post';
import Share from '../Share/Share';

import classes from './Feed.module.css';


function Feed() {
  return (
    <div className={classes.feed}>
      <div className={classes.wrapper}>
         <Share/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
      </div>
    </div>
  )
}

export default Feed;