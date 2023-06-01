import './App.css';
import Navigation from './navbar/Navigation';
// import PlayersPresentation from './components/PlayersPresentation';
import Footer from './Footer';
import Main from './components/Main';
// import OnePlayer from './components/OnePlayer';

function App() {
  return (
    <div className="App">
     <Navigation/>
     {/* <PlayersPresentation/> */}
    {/* <OnePlayer/> */}
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
