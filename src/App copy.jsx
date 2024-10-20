
import { useState } from 'react'
import './App.css'
import { foodData } from './foodCart/data';
import FoodCart from './foodCart/FoodCart'
import ButtonCountry from './components/ButtonCountry'
import MainOutput from './components/MainOutput';

function App() {

  // let [index, setIndex] = useState(0);

  // let clickHandler = () => {
    
  //   setIndex((old => {

  //     if(foodData.length -1 > old) {
  //       return old +1;
  //     } else {
  //       return old
  //     }
      

  //   }))


  // }


  // let [index, setIndex] = useState(0);

  // let clickHandler = () => {

  //   setIndex((old => {

  //     if(foodData.length - 1 > old) {
  //       return old +1;
  //     } else {
  //       return old;
  //     }

  //   }))

  // }


  let [index, setIndex] = useState(0);

  let clickHandler = () => {

    setIndex((old => {

      if(foodData.length -1 > old) {
        return old + 1;
      } else {
        return old;
      }

    }))
  
  }


// ************************** this is for (-) ************************
      // let clickHandler2 = () => {
      //   setIndex(old => {

      //     // if(old === 0) {
      //     //   return foodData.length -1;
      //     // }
      //     // return -- old

      //     return old === 0 ? 0 : --old

      //   })
      // }


    //  let clickHandler2 = () => {
    //     setIndex(old => {

    //       if(old === 0) {
    //         return foodData.length - 1;
    //       } else {
    //         return -- old;
    //       }

    //     })
    //  } 

    // let clickHandler2 = () => {
    //   setIndex(old => {
    //     if(old === 0) {
    //       return foodData.length -1;
    //     } else {
    //       return -- old
    //     }
    //   })
    // }
      

    
    // let clickHandler2 = () => {
    //   setIndex(old => {
    //     if(old === 0) {
    //       return foodData.length -1;
    //     }
    //     return --old
    //   })
    // }

    // let clickHandler2 = () => {
    //   setIndex(old => {
    //    return old === 0 ? 0 : --old;
    //     // return old === 0 ? 0 : --old
    //   })
    // }


  



    let clickHandler2 = () => {
      setIndex(old => {
        return old === 0 ? foodData.length -1 : --old;
      })
    }




      let clickHandler3 = () => {
        setIndex(old => {
          return old === 0 ? 5*1 : --old;
        })
      }


      const handleUp = ()=>{
        
        
        
      }

  return (
    <>

  <FoodCart onClick={clickHandler} test={clickHandler2} click3={clickHandler3} data={foodData[index]} />

  <MainOutput onUp={handleUp} />

  <ButtonCountry />
  
  

    </>
  )
}

export default App

