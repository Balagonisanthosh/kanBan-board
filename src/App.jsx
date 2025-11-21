import React from "react"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import './index.css';
import KanbanBoard from "./Pages/KanbanBoard";
import { FormProvider } from "./Components/FormContext";
import Mainkanbanboard from "./Components/KanbanBoard/Main-kanbanboard";
import MainForm from "./Components/KanbanBoard/MainForm";



function App() {
  
  return (
    <div className=" min-h-screen bg-slate-200" >
    {/* <BrowserRouter>
    <FormProvider>
    <Routes>
    <Route path="/KanbanBoard" element={<KanbanBoard />}/>

    </Routes>
    </FormProvider>
    
    </BrowserRouter> */}

     <Mainkanbanboard/> 
       
      
    </div>
  )
}

export default App
