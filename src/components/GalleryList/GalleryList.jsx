import GalleryItem from "../GalleryItem/GalleryItem";
import React from "react";

function GalleryList({gallary}) {
    console.log('in GalleryList.jsx', gallary);
    
    return (
        <>
            <h2>GalleryList</h2>
            <div className={'gallaryList'}>
                {gallary.map(imgs => 
                    (<GalleryItem
                        key={imgs.id}
                        imgs={imgs}
                    />)
                )};
            </div>
        </>
    );
}

export default GalleryList;