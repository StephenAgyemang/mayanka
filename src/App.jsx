import HomePage from "./screens/HomePage"
import Cart from "./components/Cart"
import Layout from "./screens/Layout"
import LiveStock from "./screens/LiveStock"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/livestock" element={<LiveStock />}/>
        <Route path="/cart" element={<Cart />}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
