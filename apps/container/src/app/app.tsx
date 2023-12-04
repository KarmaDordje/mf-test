import * as React from 'react';


import { Link, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Projects = React.lazy(() => import('projects/Module'));
const About = React.lazy(() => import('about/Module'));
export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className="flex flex-col h-screen justify-between">
        <Nav/>
        <div className="w-3/4 mx-auto">
          <Routes>
            <Route path="/" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>

        <Footer/>
      </div>

    </React.Suspense>
  );
}

export default App;
