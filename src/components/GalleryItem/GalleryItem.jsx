import { useState } from 'react';

function GalleryItem({displayImage, addLike}) {
    let [showDescription, setShowDescription] = useState(true);
    let [likeImage, setLikeImage] = useState(displayImage.likes);


    const handleClick = () => {
        setShowDescription(!showDescription);
    }

    const handleLikes = (evt) => {
        evt.preventDefault();

        addLike(evt.target.id);
        setLikeImage(likeImage + 1);
        displayImage.likes = likeImage;
    }

    return (
        <>
            <div className={'allImages'}>
                <div onClick={handleClick}>
                    {showDescription ? <img src={displayImage.path}></img> : <h3>{displayImage.description}</h3>}
                </div>

                <div className={'buttons'}>
                    <button 
                        id={displayImage.id}
                        likes={displayImage.likes}
                        onClick={handleLikes}>
                        Like
                    </button>
                </div>
            </div>            
        </>
    );
}

export default GalleryItem;