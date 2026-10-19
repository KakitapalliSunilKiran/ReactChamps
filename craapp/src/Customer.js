import './Customer.css'
function Customer({y,func,x}){
   function handleClick(){
      console.log(x)
      console.log(y)
      console.log(func)
      func(100,88);
   }
    return <div className="custcss">
        <h1>Hey ......I am Sunil from Custimer {x}</h1>
        <button onClick={handleClick}>Click me </button>
     </div> 
}
export default Customer;

