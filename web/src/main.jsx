import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import enUS from 'antd/locale/en_US'
// import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import Homepage from './pages/Homepage.jsx'
import { DataProvider } from './components/DataContext';
import QRCodeScan from './pages/QRCodeScan.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <Router>
      <ConfigProvider locale={enUS}>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/home/*" element={<Homepage />} />
          <Route path="/qrcode" element={<QRCodeScan />} />
        </Routes>
      </ConfigProvider>
    </Router>
  </DataProvider>
)


// eslint-disable-next-line react/no-deprecated
// ReactDOM.render(
//   <DataProvider>
//     <Router>
//       <ConfigProvider locale={enUS}>
//         <Routes>
//           <Route path="*" element={<Login />} />
//           <Route path="/home/*" element={<Homepage />} />
//           <Route path="/qrcode" element={<QRCodeScan />} />
//         </Routes>
//       </ConfigProvider>
//     </Router>
//   </DataProvider>,
//   document.getElementById('root')
// )
