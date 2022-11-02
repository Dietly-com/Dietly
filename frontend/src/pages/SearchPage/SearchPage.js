import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';

function SearchPage() {
  return (
    <div className="SearchPage">
      <Page>
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
