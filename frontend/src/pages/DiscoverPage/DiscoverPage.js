import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Section from '../../components/utils/Section/Section';

function DiscoverPage() {
  return (
    <div className="DiscoverPage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          <Section
            header={<div>Recipes</div>}>
          </Section>
          <Section
            header={<div>Products</div>}>
          </Section>
        </Column>
        <Column>
          <Section
            header={<div>Recipes for you</div>}>
          </Section>
          <Section
            header={<div>Discover products</div>}>
          </Section>
        </Column>
      </Page>
    </div>
  );
}

export default DiscoverPage;
