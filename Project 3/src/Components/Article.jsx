import React from 'react'

function Article({ title, description, url, urlToImage, }) {
  
        return (<div className={!urlToImage && !description ? 'article article-sm' : 'article article-bg'}>
                
                {urlToImage && <img src={urlToImage} alt="helo" />}

                <h3 className='article-title'><a href={url}>{title}</a></h3>
                
                {description && <p>{description}</p>}

            </div>
        )
   

}

export default Article