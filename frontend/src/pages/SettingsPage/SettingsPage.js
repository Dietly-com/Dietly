import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';

function SettingsPage() {
  return (
    <div className="SettingsPage">
      <Page>
        <Column width = {1000}>
          Settings
        </Column>
        <Column>
        </Column>
      </Page>
    </div>
  );
}

export default SettingsPage;
