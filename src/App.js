import { IoMdHome, IoMdTrash, IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboard } from "react-icons/md";
import './App.css';

function App() {
  return (
    <>
      <div className='header'>
        <h3 className='header-logo'>WelthanoStrap</h3>
        <h3 className='header-text'>Components</h3>
        <h3 className='header-text'>GitHub</h3>
        <h3 className='header-text'>Options <IoMdArrowDropdown /></h3>
        <h3 className='header-text'>Simple Text</h3>
      </div>

      <div className="content">
        <div className="content-top">
          <h1>Get Started</h1>
          <h2>REACT JS</h2>
        </div>
        <div className="content-mid">
          <img src="ItsMe.jpeg" alt="Foto do Usuário" />
        </div>
        <div className="content-bottom">
          <h2>Let's study together? \o/</h2>
        </div>
      </div>

      <div className="side-menu">
        <div className="section" id="home-item"><IoMdHome size={25} color="rgb(126, 126, 126)" /> <h3>Home</h3></div>
        <div className="section" id="test-item"><IoMdTrash size={25} color="rgb(126, 126, 126)" /><h3>TEST</h3></div>
        <div className="section" id="exercises-item">
          <IoMdArrowDropdown size={20} color="rgb(126, 126, 126)" /><MdKeyboard size={25} color="rgb(126, 126, 126)" /><h3>Exercises</h3>
        </div>
        <div className="section" id="history-item"><MdKeyboard size={25} color="rgb(126, 126, 126)" /><h3>History</h3></div>
      </div>

      <div className='footer'>
        <h4><b>Device:</b> <br /> Desktop/Laptop </h4>
        <h4><b>Display Retina:</b> No <h4>© 2022 - <a href="https://github.com/Welthanos"> Welthanos </a></h4></h4>
        <h4><b>Orientation:</b> <br /> Landscape </h4>
      </div>
    </>

  );
}

export default App;
