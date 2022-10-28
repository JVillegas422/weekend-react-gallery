import { useState } from 'react';

function GalleryItem({displayImage, addLike}) {
    let [showDescription, setShowDescription] = useState(true);
    let [likeImage, setLikeImage] = useState(displayImage.likes);


    const handleClick = () => {
        setShowDescription(!showDescription);
    }

    const handleLikes = (evt) => {
        evt.preventDefault();
        setLikeImage(likeImage + 1);
        // addLike(evt.target.id);
        // displayImage.likes = likeImage;
    }

    return (
        <>
            <div className={'allImages'}>
                <div onClick={handleClick}>
                    {showDescription ? 
                    <img src={displayImage.path}></img> : 
                    <h3>{displayImage.description}</h3>}
                </div>

                <div className={'buttons'}>
                    <button 
                        className='likeBtn'
                        id={displayImage.id}
                        likes={displayImage.likes}
                        onClick={handleLikes}>
                        Like
                    </button>
                    {(likeImage > 0) ?
                    <h4>{likeImage} People love this!</h4> : 
                    <h3>Be the first to like this!</h3>}
                </div>
            </div>            
        </>
    );
}

export default GalleryItem;