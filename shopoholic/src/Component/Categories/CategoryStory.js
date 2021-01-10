import React from 'react';
import classes from './CategoryStory.css';

function CategoryStory({title,Img}) {
 return (

  <div className={classes.CategoryStory}>
      <div className={classes.CategoryStoryImg}><img src={Img} alt="shoe"/></div>
      <strong>{title}</strong>
  </div>
   
 )
}

export default CategoryStory;
