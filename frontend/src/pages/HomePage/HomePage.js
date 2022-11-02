import { Button, TextField } from '@mui/material';
import Column from '../../components/utils/Column/Column';
import Page from '../../components/utils/Page/Page';

function HomePage() {

  return (
    <div className="HomePage">
      <Page>
        <Column width = {1000}>
          Home
        </Column>
        <Column>
        </Column>
      </Page>
    </div>
  );
}

export default HomePage;
