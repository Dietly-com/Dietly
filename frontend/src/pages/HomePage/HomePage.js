import { Button, TextField } from '@mui/material';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Column from '../../components/utils/Column/Column';
import Page from '../../components/utils/Page/Page';
import Section from '../../components/utils/Section/Section';

function HomePage() {

  return (
    <div className="HomePage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          <Section
            header={<div>Recipes for you</div>}>
          </Section>
          <Section
            header={<div>Recommended products</div>}>
          </Section>
          <Section
            header={<div>Popular diets</div>}>
          </Section>
        </Column>
        <Column>
          <Section
            header={<div>Today summary</div>}>
          </Section>
        </Column>
      </Page>
    </div>
  );
}

export default HomePage;
