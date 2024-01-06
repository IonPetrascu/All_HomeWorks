import React, { useState } from 'react'

function Tabs(post) {
    let [state, setState] = useState(1)

    const changeState = (e) => {
        const tab = +(e.target.textContent);
        console.log(tab);
        setState(tab)
    }
   
    return (
        <div className='tabs__wrapper'>
            <div className='tabs__list'>
                <button onClick={(e) => changeState(e)} className={state === 1 ? "btn btn__tab--active" : "btn"}>1</button>
                <button onClick={(e) => changeState(e)} className={state === 2 ? "btn btn__tab--active" : "btn"}>2</button>
                <button onClick={(e) => changeState(e)} className={state === 3 ? "btn btn__tab--active" : "btn"}>3</button>
            </div>
            <div className='tabs__content'>
                {post.content.map((el) => <p key={el.id} className={state === el.id ? 'content content--active' : 'content'}> {el.text}</p>)}
            </div>
        </div>
    )
}

export default Tabs