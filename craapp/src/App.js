import Customer from "./Customer";
import './App.css'

function App()
{
  const name="kakitapalli"
  const a = 20;
  const b=30;
  function add(a,b){
    console.log(a+b);
  }
   return (
    <div className="appcss">
      <div className="indi">
        <Customer func={add} x={a}/>
      </div>
       <div className="indi">
        <Customer func={add} x={a}/>
      </div>
       <div className="indi">
        <Customer func={add} x={a}/>
      </div>
       <div className="indi">
        <Customer func={add} x={a}/>
      </div>
    </div>
   );
}
export default App;



