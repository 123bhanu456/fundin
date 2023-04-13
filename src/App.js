import { Main } from './pages/Main';
import {Company} from './pages/Company'
import {Login} from './components/Login'
import {Navbar} from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
function App() {
  return (
   <>
   <div className="App">
      <Router>
        <LoginPage/>
        <SignupPage/>
        <Main/>
        <Company/>
      </Router>
    </div>
   </>
  );
}

export default App;