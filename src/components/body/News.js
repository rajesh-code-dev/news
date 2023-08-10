import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
// import './news.css'
import { UserContext } from '../../UserContext';

const initialSelectedStates = [
    'technology',
    'fitness',
    'food',
    'science',
    'space',
    'entertainment',
]

export default function News() {

    const [news, setNews] = useState([]);
    const [newsType, setNewsType] = useState('science');
    const [searchValue, setSearchValue] = useState('')
    const [select, setSelect] = useState([])
    const [urlToImage, setUrlToImage] = useState('')
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')
    const [link, setLink] = useState('')
    const [selected, setselected] = useState('')
    const [selectedItems, setSelectedItems] = useState({});
    const [fav, setFav] = useState({})
    const [hide, hidePop] = useState('')

    const { name } = useContext(UserContext)

    searchValue.map((item) => {
        setselected(item)
    })

    useEffect(() => {
        Axios.get(`http://localhost:3001/food${selected}`)
            .then((data) => {
                const result = data.data;
                setNews(result);
            });

    }, [setNews])



    // posting news data to database
    const PostData = async () => {
        try {
            const result = await Axios.post(`http://localhost:3001/articles`, {
                urlToImage: urlToImage,
                author: author,
                title: title,
                description: description,
                content: content,
                link: link
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    const handleConfirm = () => {
        PostData(); // Call the PostData function here when the user confirms their selection
    };

    window.addEventListener('DOMContentLoaded', handleConfirm)

    const handleNewsTypeChange = (type) => {
        setSelectedItems(prevItems => ({
            ...prevItems,
            [type]: 'orange' // Set the desired color here
        }));

        setSelect(prevItems => ({
            ...prevItems, [type]: [type]
        }))
    };

    const getValue = () => {
        setFav(select)
        hidePop('none')
    }

    const buttonValue = (item) => {
        setSearchValue(item)
    }

    return (
        <div className='newsContainer'>
            {name ? <div className='popupContainer' style={{ display: hide }}>
                <div className="news-item">
                    <h2>Select Your Favorite</h2>
                    {initialSelectedStates.map((item) => (
                        <div className='favButton'
                            key={item}
                            style={{ backgroundColor: selectedItems[item] || 'transparent' }}
                            onClick={() => handleNewsTypeChange(item)}
                        >
                            {item}
                        </div>
                    ))}
                    <button className='favButton' onClick={getValue} >CONFIRM</button>
                </div>

            </div>
                : ''}

            <div className="favButtons">
                {Object.keys(fav).map((selectedCategory, index) => (
                    <button style={{ color: '#fff' }} className='favButton' onClick={buttonValue(selectedCategory)} key={index}>{selectedCategory}</button>
                ))}
            </div>

            <div className="articlesContainer">
                <div className='newsArray'>
                    {Array.isArray(news) && news.map((article, index) => (
                        <div className='box' key={index}>
                            <div className='imgBox' style={{ width: '90%' }}>
                                <img alt="Logo" onLoad={() => {
                                    setUrlToImage(article.urlToImage);
                                    setTitle(article.title);
                                    setAuthor(article.author);
                                    setDescription(article.description);
                                    setContent(article.content);
                                    setLink(article.link)
                                }} style={{ width: '100%' }} src={article.urlToImage} />
                            </div>
                            <div className='contentBox'>
                                <h3>{article.title}</h3>
                                <h2>{article.author}</h2>
                                <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '10px'}}>{article.description}</p>
                                <p style={{ fontSize: '17px', textAlign: 'center', marginTop: '10px' }}>{article.content}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" >Read more</a>
                                {name ? <button style={{textAlign: 'center'}} className='favButton' onClick={handleConfirm}>Save</button> : ''}
                            </div>
                            <hr />
                        </div>

                    ))}
                </div>
            </div>

        </div>
    );
}
