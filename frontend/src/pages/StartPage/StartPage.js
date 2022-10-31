import './StartPage.css';

import { getDiets } from '../../api/controllers/DietApi';
import { postAuth } from '../../api/controllers/AuthApi';
import { getMe } from '../../api/controllers/MeApi';
import { postBadge } from '../../api/controllers/BadgeApi';
import Page from '../../components/platform/Page/Page';

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
      <Page
        pageHeader={
          <div></div>
        }
        pageBody={
          <div></div>
        }
        pageFooter={
          <div></div>
        }/>
    </div>
  );
}

export default StartPage;
