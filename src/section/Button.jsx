

function Button(props) {
    return ( 
    
    <button onClick={() => props.onClick && props.onClick()} className={`btn ${props.className}`}>{props.children}</button>
        
    );
}

export default Button;



{/* <button onClick={(e) => {
    // e.target.className = "hover:bg-lime-300"; // Update the className
    e.target.innerHTML = "Added to Cart";    // Update the innerHTML
}}
className={`btn ${props.className}`}>
{props.children}
</button> */}
