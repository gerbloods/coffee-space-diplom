import React from 'react';

const Posts = ({news}) => {
    
    const photo = `http://localhost:5000/${news.photo}`
    
    return (
        <div>
            <div className="header-post">
                    <h1>{news.name}</h1>
                    </div>
                    <p>{news.description}</p>
                    <div className="time__div">
                    <span className='time'>{news.createdAt}</span>
                    </div>
                    <div className="photoes">
                    <img className="img" src={photo} alt="" />
                    </div>
        </div>
    );
};

export default Posts;