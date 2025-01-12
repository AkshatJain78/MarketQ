import './Main2.css';
import useScrollReveal from './useScrollReveal'; // Import the custom hook

   // Initialize scroll reveal effect

function Main2(){
  useScrollReveal();
    return(
        <div className='box'>
          <div className="first reveal">Empower your Bussiness join co-operatives</div>
          <div className="second reveal">Confused how to expand your bussiness. Here you go</div>
        </div>
    )
  }
  
export default Main2;