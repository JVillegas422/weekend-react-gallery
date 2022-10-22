import GalleryItem from "../GalleryItem/GalleryItem";
import React from "react";

function GalleryList({galleryItems, addLike}) {
    console.log('in GalleryList.jsx', galleryItems);
    
    return (
        <>
            <h2>GalleryList</h2>
            <div className={'gallaryList'}>
                {galleryItems.map(imgs => 
                    (<GalleryItem
                        key={imgs.id}
                        displayImage={imgs}
                        addLike={addLike}
                    />)
                )}
            </div>
        </>
    );
}

export default GalleryList;