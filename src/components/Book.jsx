
// import React, { useState } from "react";

import { useState } from "react";

function Book() {
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const [items, setItems] = useState([
    { id: 1, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?" },
    { id: 2, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?" },
    { id: 3, content: "Consectetur adipisicing elit. Autem, quo?" },
    { id: 4, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && parseInt(value) >= 1 && parseInt(value) <= 5) {
      // Move the item with the corresponding ID to the first position
      const newItems = [...items];
      const itemIndex = newItems.findIndex((item) => item.id === parseInt(value));
      if (itemIndex !== -1) {
        const selectedItem = newItems.splice(itemIndex, 1)[0];
        newItems.unshift(selectedItem);
        setItems(newItems);
      }
    }
  };

  return (
    <div>
      {/* Input field */}
      <div>
        <input
          type="text"
          placeholder="Enter ID (1-5)"
          value={inputValue}
          onChange={handleInputChange}
          className="border p-2 mt-4"
        />
      </div>

      {/* Items are always visible but reordered */}
      <div className="mt-6">
        {items.map((item) => (
          <div key={item.id} id={item.id} className="mb-4">
            <h1>{item.id}</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;























//*********************** */ when i write a number of id that will come and every items will be divisible ************************

// import { useState } from "react";

// function Book() {
//   const [inputValue, setInputValue] = useState(""); // State to store input value

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value); // Update state with the input value
//   };

//   return (
//     <div>
//       {/* Input field */}
//       <div>
//         <input
//           type="number"
//           placeholder="Enter ID (1-5)"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="border p-2 mt-4"
//         />
//       </div>

//       {/* Content that corresponds to the input value */}
//       <div className="mt-6">
//         {inputValue === "1" && (
//           <div id="1">
//             <h1>1</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {inputValue === "2" && (
//           <div id="2">
//             <h1>2</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {inputValue === "3" && (
//           <div id="3">
//             <h1>3</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {inputValue === "4" && (
//           <div id="4">
//             <h1>4</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//          {inputValue === "5" && (
//           <div id="5">
//             <h1>5</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Book;


























// ********************* button no ************************
// import React, { useState } from "react";

// function Book() {
//   const [activeContentId, setActiveContentId] = useState(1); // Default content is for button 1

//   const handleButtonClick = (id) => {
//     setActiveContentId(id); // Set the content ID to the clicked button's ID
//   };

//   return (
//     <div>
//       {/* Buttons */}
//       <div>
//         <button
//           className="ml-3 p-2 bg-rose-300"
//           onClick={() => handleButtonClick(1)}
//         >
//           1
//         </button>
//         <button
//           className="ml-3 p-2 bg-rose-300"
//           onClick={() => handleButtonClick(2)}
//         >
//           2
//         </button>
//         <button
//           className="ml-3 p-2 bg-rose-300"
//           onClick={() => handleButtonClick(3)}
//         >
//           3
//         </button>
//         <button
//           className="ml-3 p-2 bg-rose-300"
//           onClick={() => handleButtonClick(4)}
//         >
//           4
//         </button>
//         <button
//           className="ml-3 p-2 bg-rose-300"
//           onClick={() => handleButtonClick(5)}
//         >
//           5
//         </button>
//       </div>

//       {/* Content */}
//       <div className="mt-6">
//         {activeContentId === 1 && (
//           <div id="1">
//             <h1>1 one items</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {activeContentId === 2 && (
//           <div id="2">
//             <h1>2 two item</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {activeContentId === 3 && (
//           <div id="3">
//             <h1>3 three item </h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {activeContentId === 4 && (
//           <div id="4">
//             <h1>4 four item</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//         {activeContentId === 5 && (
//           <div id="5">
//             <h1>5 five item</h1>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Autem, quo?
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Book;



















// function Book() {
     
     
//      return (
          
//         <div>
//           <div>
//               <input type="text" placeholder="search" />
//           </div>

//             <div id="1" className="">
//                <h1>1</h1>
//                  nnulla eaque quam? Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
//             </div>
//             <div id="2" className="">
//                <h1>2</h1>
//                  nnulla eaque quam? Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
//             </div>
//             <div id="3" className="">
//                <h1>3</h1>
//                  nnulla eaque quam? Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
//             </div>
//             <div id="4" className="">
//                <h1>4</h1>
//                  nnulla eaque quam? Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
//             </div>
//             <div id="5" className="">
//                <h1>5</h1>
//                  nnulla eaque quam? Lorem Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Autem, quo?
//             </div>
//         </div>
//     );
// }

// export default Book;