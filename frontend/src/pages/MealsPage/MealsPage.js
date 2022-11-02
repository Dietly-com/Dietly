import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';

function MealsPage() {
  return (
    <div className="MealsPage">
      <Page
      header={<SearchBar/>}>
        <Column width = {1000}>
          Meals
        </Column>
        <Column>
        </Column>
      </Page>
    </div>
  );
}

export default MealsPage;
