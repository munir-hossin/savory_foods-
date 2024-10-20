


import Myinput from "./components/Myinput";



function InputHandler() {

    let testHandler = () => {
        console.log('hello');   
    }


    return (
        <div>
            <Myinput bg={"bg-red-400"} test={testHandler}/>
        </div>
    );
}

export default InputHandler;