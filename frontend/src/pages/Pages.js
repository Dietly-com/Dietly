import './Pages.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { checkToken } from '../api/utils/TokenUtils';
import StartPage from './StartPage/StartPage';
import SettingsPage from './SettingsPage/SettingsPage';
import MePage from './MePage/MePage';
import SearchPage from './SearchPage/SearchPage';
import MealsPage from './MealsPage/MealsPage';
import HomePage from './HomePage/HomePage';
import DiscoverPage from './DiscoverPage/DiscoverPage';
import DietPage from './DietPage/DietPage';

function Pages() {
  if(!checkToken()) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}/>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
              <Route path="/discover" element={<DiscoverPage />}>
                  <Route path="/discover/diet" element={<DietPage />} />
                  <Route path="/discover/search" element={<SearchPage />} />
              </Route>
              <Route path="/me" element={<MePage />}>
                  <Route path="/me/meals" element={<MealsPage />} />
                  <Route path="/me/settings" element={<SettingsPage />} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Pages;
