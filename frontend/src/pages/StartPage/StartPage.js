import './StartPage.css';
import logo from '../../icons/logo.svg';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getDiets } from '../../api/controllers/DietApi';
import { postAuth } from '../../api/controllers/AuthApi';
import { getMe } from '../../api/controllers/MeApi';
import { postBadge } from '../../api/controllers/BadgeApi';

postAuth({
  password: 'trudnehaslo',
  login: 'login123'
})
.then(response => {
  console.log(response.data);
})

postBadge({
  name: 'Nowy badge',
  description: 1
})
.then(response => {
  console.log(response.data);
})

getMe()
.then(response => {
  console.log(response.data);
})

getDiets()
.then(response => {
  console.log(response.data)
});

function StartPage() {
  return (
    <div className="StartPage">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default StartPage;
