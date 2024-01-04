import React from 'react';
import  { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal = () => {
    
    const[url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meal);
            setItem(data.meals);
            setShow(true)
        })
    },[url])
    const setIndex=(alpha)=>{
    
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
  return (
    <>
    
        <divz className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>
Discover a delightful recipe for homemade vegetable lasagna. Layers of fresh pasta, sautéed vegetables, rich tomato sauce, and a creamy béchamel come together to create a flavorful and comforting dish. </h4>
            </div>
            <div className="searchBox">
                <input type="search" className='search-bar'/>

            </div>
            <div className="container">
             
               {
                show ?    <MealItem data ={item}/>: "Not Found"
               }


            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
 
            </div>
        </divz>
    </>
  )
}

export default Meal