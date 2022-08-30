import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas';
import './sigCanvas.css'


function App() {
  return (
    <div className='App'>
      <h1>Ejemplo de firma Finanova</h1>
      
      <Popup modal trigger={<button>Firma Aquí</button>}>
        <SignaturePad
          canvasProps={{
            className: "signatureCanvas"
          }}
        /> 
      </Popup>
    </div>
  );
}

export default App;
