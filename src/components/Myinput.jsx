

function Myinput(props) {
    
    
    return (
        <div>
            <button className={props.bg} onClick={props.test}>This is my button</button>
        </div>
    );
}

export default Myinput;