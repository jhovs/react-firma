import logo from './logo.svg';
import { useRef, useState } from 'react'
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas';
import './sigCanvas.css'

function App() {
  const [imageURL, setImageURL] = useState(null)
  const sigCanvas = useRef({})
  const limpiar = () => sigCanvas.current.clear()
  const guardar = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
  

  return (
    <div className='App'>
      <h1>Ejemplo de firma Finanova</h1>
      
      <Popup modal trigger={<button>Firma Aquí</button>} closeOnDocumentClick={false}>
        {close =>(
          <>
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas"
            }}
          />
          <button onClick={close}>Cerrar</button> &nbsp;
          <button onClick={limpiar}>Limpiar</button> &nbsp;
          <button onClick={guardar}>Listo!</button>
          </> 
        )}
      </Popup>
      
      <br></br>
      <br></br>
      <br></br>

      { imageURL ?  (        
      <img 
      src={imageURL}
      alt="mi Firma"
      style={{
        display: "block",
        margin: "0 auto",
        border: "1px solid black",
        width: "150px"
      }}
      />) : null }

    </div>
  );
}

export default App;
