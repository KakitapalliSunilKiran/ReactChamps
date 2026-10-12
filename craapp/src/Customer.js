function Customer(p){
   function handleClick(){
    console.log(typeof p.func)
     p.func(100,200);
   }
    return <>
        <h1>Hey ......I am Sunil from Custimer </h1>
        <button onClick={handleClick}>Click me</button>
     </> 
}
export default Customer;