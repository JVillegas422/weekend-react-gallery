import GalleryItem from "../GalleryItem/GalleryItem";
import React from "react";

function GalleryList({galleryItems}) {
    console.log('in GalleryList.jsx', galleryItems);
    
    return (
        <>
            <h2>GalleryList</h2>
            <div className={'gallaryList'}>
                {galleryItems.map(imgs => 
                    (<GalleryItem
                        key={imgs.id}
                        showDescription={imgs}
                    />)
                )}
            </div>
        </>
    );
}

export default GalleryList;