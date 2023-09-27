import {Routes, Route} from 'react-router-dom';
import './style/css/index.css';
import theme from './theme';
import HomePage from './components/HomePage';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Books from './components/books/Books';

function App() {
  theme();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/project" element={<HomePage/>}/>
          <Route path="/project/books" element={<Books/>}/>
          <Route path="/project/news" element={<News/>}/>
          <Route path="/project/login" element={<Login/>}/>
          <Route path="/project/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>    
    </>
  )
}

export default App;
