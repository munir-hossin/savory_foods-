import GalleryItem from "./GalleryItem";

function Gallery(props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {props.galleryItemData.map((item) => (
                <GalleryItem key={item.id} galleryItemData={item} />
            ))}
        </div>
    );
}

export default Gallery;

























































// import GalleryItem from "./GalleryItem";


// function gallery(props) {
//     return (
//         <div>
//              <div className="grid grid-cols-4 gap-5">        
//             <GalleryItem />
//              </div>
//         </div>
//     );
// }

// export default gallery;