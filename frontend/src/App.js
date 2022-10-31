import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Platform from './components/platform/Platform/Platform';
import StandardAppBar from './components/standard/StandardAppBar/StandardAppBar';
import StandardPlatformBar from './components/standard/StandardPlatformBar/StandardPlatformBar';

import StartPage from './pages/StartPage/StartPage';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Platform
              platformBar={<StandardPlatformBar/>}
              page={<StartPage/>}
              />
            }/>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <Platform
        appBar={<StandardAppBar/>}
        page={
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/discover" element={<DiscoverPage />}>
                <Route path="/discover/diet" element={<DietPage />} />
                <Route path="/discover/search" element={<SearchPage />} />
              </Route>
              <Route path="/me" element={<MePage />}>
                  <Route path="/me/meals" element={<MealsPage />} />
                  <Route path="/me/settings" element={<SettingsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        }/>
    );
  }
}

export default App;
