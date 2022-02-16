import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Titulo from './components/Titulo/Titulo';

export default function App() {
  return (
    <div className="App">
      
      <Titulo titulo="Aula 01 - React" subtitulo="Teste"/>
      <Wrapper/>
      
    </div>
    
  );
}

