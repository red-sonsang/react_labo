const Button = ({name,message}) =>(
    <button
        onClick={()=>{
            console.log(name);
            alert(message);
        }}
    >
        {name}
    </button>
)



export default Button

