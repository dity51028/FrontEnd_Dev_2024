import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';


const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([]);

  useEffect(()=>{
   // console.log(import.meta.env.VITE_MY_API_KEY)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7310f294a262471a88bc3866cd1e68a7`;
    fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));

  
  },[category])


  return (
    <>
   <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
    {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
   </>
  )
}

export default NewsBoard