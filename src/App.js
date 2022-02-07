import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { getAllData } from './API';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import InfoPage from './pages/InfoPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
    <Provider store={store}>
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<><Navbar page='Country data' /><Main /></>}>
       <Route index element={<Navbar />} />

     </Route>
     <Route path="/infopage/:country" element={<><Navbar page='Country data' /><InfoPage /></>}>
       {/* <Route index element={<Main />} /> */}

     </Route>
   </Routes>
 </BrowserRouter>
 </Provider>
 </div>
);
}


export default App;
