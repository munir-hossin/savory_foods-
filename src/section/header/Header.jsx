/* eslint-disable react/prop-types */
import Button from "../Button";
import Search from "./Search";


function Header({ onAscending, onDescending, onSearch }) { 

  // let SearchHandler = (test) => {
  //   onSearch(test);  
  // }
 
      return (
        <div className="flex justify-between items-center pb-9">
          <div className="flex">
            <Button onClick={onAscending} className="py-2 px-4 mr-3 hover:bg-lime-300 inline-block bg-lime-500 rounded">
              Ascending
            </Button>
            <Button onClick={onDescending} className="py-2 px-4 hover:bg-lime-300 bg-lime-500 rounded">
              Descending
            </Button>
          </div>
          <Search onSearch={(text) => onSearch(text)} />
        </div>
      );
}

export default Header;
