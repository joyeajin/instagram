import React from 'react';

const TxtFeed = (props) => {
    return (
        <div className='feed'>
        <div className='top'>
            <div className='profile-image'></div>
            <div className='profile-desc'>
                <div className='nickname txt-bold'>{props.name}</div>
                <div className='timestamp'>{props.email}</div>
            </div>
        </div>{/* top */}
        <div className='contents'>
            {props.body}
        </div>{/* contents */}
        <div className='bottom'>
            <div className='like'>
                <div className='asset'>
                    <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                </div>
                <div className='count txt-bold'>
                    25k
                </div>
            </div>
        </div>
    </div>
    );
};

export default TxtFeed;