import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Platform from './components/utils/Platform/Platform';
import StandardAppBar from './components/ready/platform/StandardAppBar/StandardAppBar';
import StandardPlatformBar from './components/ready/platform/StandardPlatformBar/StandardPlatformBar';

import SignInPage from './pages/SignInPage/SignInPage';
import SignOnPage from './pages/SignOnPage/SignOnPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import MePage from './pages/MePage/MePage';
import SearchPage from './pages/SearchPage/SearchPage';
import MealsPage from './pages/MealsPage/MealsPage';
import HomePage from './pages/HomePage/HomePage';
import DiscoverPage from './pages/DiscoverPage/DiscoverPage';
import DietPage from './pages/DietPage/DietPage';

import { checkToken } from "./api/utils/TokenUtils";

function App() {
  if(!checkToken()) {
    return (
      <Platform
        platformBar={<StandardPlatformBar/>}
        page={
          <BrowserRouter>
            <Routes>
              <Route path="/sign-in" element={<SignInPage/>}/>
              <Route path="/sign-on" element={<SignOnPage/>}/>
            </Routes>
          </BrowserRouter>
        }/>
    );
  } else {
    return (
      <Platform
        appBar={<StandardAppBar/>}
        page={
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/discover" element={<DiscoverPage />}/>
              <Route path="/discover/diet" element={<DietPage />} />
              <Route path="/discover/search" element={<SearchPage />} />
              <Route path="/me" element={<MePage />}/>
              <Route path="/me/meals" element={<MealsPage />} />
              <Route path="/me/settings" element={<SettingsPage />} />
            </Routes>
          </BrowserRouter>
        }/>
    );
  }
}

export default App;
