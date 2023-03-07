import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import IndexView from "./page/Index";
import Marketing from "./page/Marketing";
import Index from './index.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Index />} >
          <Route index element={<IndexView />} />
          <Route path ="marketing" element={ <Marketing/> }/>,
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
    // <Index />

   
  );
}

export default App;
