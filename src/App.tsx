import './App.css'
import { Home } from './page/Home/home'
import { useTheme } from './context/theme';
import { MainMenu } from './components/MainMenu/MainMenu';
import { Detail } from './page/Detail/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className={`${theme === 'light' ? 'light' : ''}`}>
      <BrowserRouter>
        <MainMenu title="where in the world?"/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/detail/:countryName' element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
