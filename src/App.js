import './App.css'; // import css

import GeneretorMain from './components/Generetor'; // import componente 'gerador de QrCode - line 12  

import { LuQrCode } from "react-icons/lu"; // import Icon QrCode  - line 11

function App() {
  return (
    <div className="App">
      <main>
        <h1><LuQrCode/> Qr Code Generetor</h1>
        <GeneretorMain/>

      </main>
    </div>
  );
}

export default App;
