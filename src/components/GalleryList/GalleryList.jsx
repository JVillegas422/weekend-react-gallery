import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList([galleryItems]) {
    console.log('in GalleryList.jsx', galleryItems);
    
    return (
        <>
            <h2>GalleryList</h2>
            <div>
                {galleryItems.map(imgs => 
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