import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';

function SearchPage() {
  return (
    <div className="SearchPage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          Search
        </Column>
        <Column>
        </Column>
      </Page>
    </div>
  );
}

export default SearchPage;
