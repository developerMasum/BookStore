
import { Outlet } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'

function App() {


  return (
    <div className="App">
       <Header />
       {/* <About /> */}
       <Outlet> </Outlet>
       {/* <footer> </footer> */}
    </div>
  )
}

export default App
