import React from 'react';
import classes from './CategoryStory.css';

function CategoryStory({title,Img}) {
 return (
  <div className={classes.CategoryStory} style={{backgroundImage:Img}}>
   <p>{title}</p>
  </div>
 )
}

export default CategoryStory;
