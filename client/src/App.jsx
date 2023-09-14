
import './App.css'
import { BrowserRouter, Routes, Route } from "react-dom"
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/tasks" element={<TaskPage />}></Route>
      <Route path="/tasks-form" element={<TaskFormPage></TaskFormPage>}></Route>
      <Route path="/tasks/:id" element={<TaskPage/>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App
