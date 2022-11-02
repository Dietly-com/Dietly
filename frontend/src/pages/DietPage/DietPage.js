import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Section from '../../components/utils/Section/Section';

function DietPage() {
  return (
    <div className="DietPage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          <Section
            header={<div>Your diets</div>}>
          </Section>
          <Section
            header={<div>Discover diets</div>}>
          </Section>
        </Column>
        <Column>
          <Section
            header={<div>Your active diets</div>}>
          </Section>
        </Column>
      </Page>
    </div>
  );
}

export default DietPage;
