import Header from './header/Header'
import BodyPart from './bodypart/BodyPart'
import Footer from './footer/Footer'
import './App.css'
export default function App(){
  return(
    <div className='app'>
       <BodyPart></BodyPart>
       <BodyPart></BodyPart>
       <BodyPart></BodyPart>     
    </div>
  );
}
