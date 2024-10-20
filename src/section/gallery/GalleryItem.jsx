/* eslint-disable react/prop-types */
import Button from "../Button";




function GalleryItem(props) {

    let {image, name, price} = props.galleryItemData;

    return (
        <div>
            <div className="border bg-white mb-3 w-full lg:h-[360px] mx-auto object-cover">
              <img className="w-ful lg:h-52 object-cover hover:grayscale transition duration-300"  src={image} alt="image" />
              <h2 className="ml-2 font-bold text-2xl py-2">{name}</h2> 
              <span className="block ml-2 font-bold mb-3">$ 5{price}</span>        
              <Button onClick={() => {console.log('Added to cart')}} className="ml-2 block py-2 px-4 mb-5 hover:bg-lime-300 bg-lime-500 rounded">Click Now</Button>

            </div>


        </div>
    );
}

export default GalleryItem;




















// ***************** this is from chatgpt ***************

// <div className="border bg-white mb-3 w-full h-80">
//     <img className="w-full h-full object-cover hover:grayscale transition duration-300" src={image} alt="image" />
//     <h2 className="ml-2 font-bold text-2xl py-3">{name}</h2>
//     <span className="block ml-2 mb-3">{category_name}</span>
//     <Button className="ml-2 block py-2 px-4 mb-5 hover:bg-lime-300 bg-lime-500 rounded">Click Now</Button>
// </div>;


