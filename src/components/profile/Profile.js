import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Axios from 'axios'
import { UserContext } from '../../UserContext';
import '../body/news.css'


export default function Profile() {
  const { name } = useContext(UserContext);
  const [news, setNews] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/savedArticles')
      .then((data) => {
        const finalData = data.data
        setNews(finalData)
      })
  })


  console.log(name)
  return (
    

    <div style={{backgroundColor: 'aqua'}}>
      <h2>Saved Articles</h2>
      <p>{name}</p>
      <div className="articlesContainer">
        
       {name ?  <div className='newsArray'>
          {Array.isArray(news) && news.map((article, index) => (
            <div className='box' key={index}>
              <div style={{ width: '80%' }}>
                <img alt="Logo" onLoad={() => {
                  
                }} style={{ width: '100%' }} src={article.urlToImage} />
              </div>
              <h2>{article.title}</h2>
              <h4>{article.author}</h4>
              <p>{article.description}</p>
              <p>{article.content}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" >Read more</a>
              <hr />
            </div>

          ))}
        </div> : ''}
      </div>
    </div>
  )
}
