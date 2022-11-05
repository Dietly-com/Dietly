import { Button, TextField } from '@mui/material';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Column from '../../components/utils/Column/Column';
import Page from '../../components/utils/Page/Page';
import Section from '../../components/utils/Section/Section';
import NoToDi from '../../components/ready/platform/NoToDi/NoToDi'

function HomePage() {
  return (
    <div className="HomePage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          <Section
            header={<div>Recipes for you</div>}>
              {/* <NoToDi show={true}/> */}
          </Section>
          <Section
            header={<div>Recommended products</div>}>
              {/* <NoToDi show={true}/> */}
          </Section>
          <Section
            header={<div>Popular diets</div>}>
              {/* <NoToDi show={true}/> */}
          </Section>
        </Column>
        <Column>
          <Section
            header={<div>Today summary</div>}>
              {/* <NoToDi show={true}/> */}
          </Section>
        </Column>
      </Page>
    </div>
  );
}

export default HomePage;
