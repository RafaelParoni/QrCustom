import './App.css';

import GeneretorMain from './components/Generetor';

import { LuQrCode } from "react-icons/lu";

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
