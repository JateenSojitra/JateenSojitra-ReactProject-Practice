import {React} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// node_modules\bootstrap\dist\css\bootstrap.min.css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import 'rsuite/dist/rsuite.min.css' 
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeDashboard from './Components/HomeDashboard';
// import SidebarRouter from './Components/Sidebar/SidebarRouter';
import SidebarRouter from './Components/Sidebar/SidebarRouter';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
    {/* <SidebarRouter/> */}
    <App/>
    {/* <HomeDashboard/> */}
    </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
