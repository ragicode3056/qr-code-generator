import './App.css'
import QRCode from 'qrcode';
import {useState} from 'react';
function App() {
  const [url,setUrl] = useState("");
  const [qrcode,setQrCode] = useState("");
  const generateQR = () =>{
    QRCode.toDataURL(url,{
      width: "300px",
     
    },(err,url)=>{
      
      if(err){
          console.log(err);         
      }
      setQrCode(url)
    })
  }
  return (
    <div>
      <h1>
    Click me to Genrate QR code

      </h1>
      <div className='divUrl'>
      <input type="text" placeholder='Enter url' value={url} onChange = {(e)=>setUrl
    (e.target.value)} />
    <button onClick = {generateQR}>Click me </button>

      </div>
      {qrcode && 
           <div className='qrCodde'>
             <div className='divQr'>
             <img src={qrcode} alt=""/> 
           <a href={qrcode} download={"qrcode.png"}>Download</a>
            </div>

      </div>
      }

   
    </div>
  )
}

export default App
