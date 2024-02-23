
import { useState } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';
import { Button } from 'antd';
// import { QrReader } from 'react-qr-reader';


const QRCodeScan = () => {
    const [scanResult, setScanResult] = useState("");

    return (
        <div>
            <h1>QRCodeScan</h1>
            {!scanResult ? <QrScanner
                // stopDecoding={scanResult}
                // scanDelay={1000}
                onDecode={(result) => {
                    setScanResult(result)
                    // window.history.back()
                    // setData(JSON.stringify({
                    //     type: 'qr',
                    //     data: result
                    // }))
                }

                }
                onError={(error) => console.log(error?.message)}
            /> : <>
                <p>{scanResult}</p>
                <Button onClick={() => setScanResult("")} type="primary" size='large' style={{
                    margin: "20px auto",
                    width: "100%"
                }}> Re-Scan</Button>

            </>}
            <Button onClick={() => window.history.back()} type="primary" danger size='large' style={{
                margin: "20px auto",
                width: "100%"
            }}> Back</Button>
        </div >
    )
}

export default QRCodeScan;