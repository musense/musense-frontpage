import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import IndexView from "./page/Index";
import Marketing from "./page/Marketing";
import Content from "./page/Content";
import Index from './index.jsx'
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 });
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Index />} >
          <Route index element={<IndexView />} />
          <Route path ="marketing" element={ <Marketing/> }/>,
          <Route path ="content/:id" element={ <Content/> }/>,
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
