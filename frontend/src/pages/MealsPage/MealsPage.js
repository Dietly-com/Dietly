import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';

function MealsPage() {
  return (
    <div className="MealsPage">
      <Page>
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
