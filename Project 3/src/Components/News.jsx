import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Article from './Article'
import Header from './Header'
import ArticleLoading from './ArticleLoading'

function News() {
    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState('general')
    const [country, setCountry] = useState('us');
    const [search, setSearch] = useState("")
    const [inputActive, setInputActive] = useState(false)

    const API_KEY = 'ddc816f526fe4e0fa861c1a576ec7d61'

    const timestamp = Date.now();
    const today = new Date(timestamp);
    const todayDay = today.getDate()
    const todayMonth = today.getMonth()
    const todayYear = today.getFullYear()
    const theme = 'usa'


    const link_1 = `https://newsapi.org/v2/everything?q=${search}&pageSize=20&page=1sortBy=popularity&apiKey=${API_KEY}`
    const link_2 = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=100&apiKey=${API_KEY}`

    let url = '';

    const searchClear = () => url = link_2
    const searchActive = () => url = link_1
    search === "" ? searchClear() : searchActive()




    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(json => setArticles(json.articles))
            
    }, [category, search, country])


    

    

    return (<>
        <Header inputActive={inputActive} setInputActive={setInputActive} setSearch={setSearch} countryName={country} setCountryName={setCountry} value={category} onChageCategory={setCategory} />
        <div className='content'>
            {articles && articles.length > 0 ? articles.map((el, index) => el.title !== '[Removed]' ? <Article url={el.url} key={index} title={el.title} description={el.description} urlToImage={el.urlToImage} /> : null) : <ArticleLoading />}
        </div>
    </>

    )
}

export default News