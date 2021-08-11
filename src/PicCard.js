import React from 'react';

const PicCard = ({src, number}) => 
            <div className="pic_card">
                {number}
                <img src={src} alt=""/>
                
            </div>;

export default PicCard;