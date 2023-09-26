import './App.css';
import Heder from './components/Heder';
import Images from './components/Images';
import Footers from './components/Footers';
import style from "./components/Alles.module.css";



function App() {
  return (
    <body className={style.body}>
      <Heder/>
     <Images></Images>
     <Footers/>
     </body>
  );
}

export default App;
