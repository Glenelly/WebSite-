import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Step into the summer season with our **Elegant Summer Dress**. This dress is the epitome of style and comfort,
                     perfect for those warm, sunny days. Made from **100% organic cotton**, this dress is lightweight and 
                     breathable, ensuring you stay cool and comfortable all day long.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;
