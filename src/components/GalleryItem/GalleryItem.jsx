import { useState } from 'react';

function GalleryItem(image) {
    let [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        setShowDescription(!showDescription);
    }
    return (
        <>
            <h2>GalleryItem</h2>
            <div onClick={handleClick}>
                {showDescription ? 
                    <img 
                        src={image.path}>
                    </img> : <h3>{image.description}</h3>
                }
            </div>
        </>
    );
}

export default GalleryItem;