import Customer from "./Customer";

function App()
{
  const name="kakitapalli"
  const a = 20;
  const b=30;
   return (
    <>
     <h1>Hey I am Sunil {name} </h1>
     <h1>Hey I am Sunil {name} </h1>
     <h1>{a+b}</h1>
      <Customer x={a} y={b}/>
    </>
   );
}
export default App;



