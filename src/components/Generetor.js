import { useState } from 'react'; // import use state - line 10,11
import './../App.css'; // import css

import QRCode from 'qrcode' // import Biblioteca qrcode - line 28-40

import { BiSolidDownload } from "react-icons/bi"; // import Download Icon - line 55

function GeneretorMain() {

    const [QrCode, setQrCode] = useState('')
    const [QrCodeText, setQrCodeText] = useState('')

    async function generetorQrCode(){
        if(QrCodeText === '' || QrCodeText === undefined){
            alert('Digite alguma coisa!')
            return
        }
        try {
            setQrCode(await QRCode.toDataURL(QrCodeText))
          } catch (err) {
            console.error(err)
            setQrCode(err)
        }
    }

    function downloadQrCode(){
        
        fetch(QrCode, {
            mode : 'no-cors',
          })
            .then(response => response.blob())
            .then(blob => {
            let blobUrl = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download = 'QRCustom: ' + QrCodeText;
            a.href = blobUrl;
            document.body.appendChild(a);
            a.click();
            a.remove();
          })

    }
    


  return (
    <div>
        <div className='input-generetor'>
            <input type='text' placeholder='Enter your URL or text...' value={QrCodeText} onChange={(e)=> setQrCodeText(e.target.value)} />
            <button onClick={generetorQrCode}>Generate your QrCode</button>
        </div>
        {QrCode !== '' && (
            <>
                <img alt='QrCode img' src={QrCode} />
                <button onClick={downloadQrCode} className='download-btn'><BiSolidDownload size={25}/></button>
                <span>Download Qr Code</span>
            </>
        )}
    </div>
  );
}

export default GeneretorMain;
