//LAZY LOADING 


import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const  Dashboard = lazy(()=> import("./components/Dashboard"))
const Landing = lazy(()=> import("./components/Landing"))


function App(){
return <div>
  <BrowserRouter>   
  <Appbar/>
  <Suspense fallback={<div>Loading...</div>}>       {/* without suspense we would get an error that a asynchronus data(eg- landing page and Dashboard) is been fetched and need to wrap it under suspense to avoid it and that is why we use suspense, usually to show that the data is loading or whatever we want to write there  */}
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/" element={<Landing/>}/>
  </Routes>
  </Suspense>
  </BrowserRouter>
</div>
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>{navigate("/")}}>Landing page</button>
    <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
  </div>
}

export default App;