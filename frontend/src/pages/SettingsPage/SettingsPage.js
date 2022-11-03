import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import Group from '../../components/utils/Group/Group';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import PersonalSettings from '../../components/ready/settingsPage/PersonalSettings/PersonalSettings';
import LoginSettings from '../../components/ready/settingsPage/LoginSettings/LoginSettings';
import DeleteAccountSettings from '../../components/ready/settingsPage/DeleteAccountSettings/DeleteAccountSettings';
import DisplaySettings from '../../components/ready/settingsPage/DisplaySettings/DisplaySettings';
import AvatarSettings from '../../components/ready/settingsPage/AvatarSettings/AvatarSettings';
import BodyDataSettings from '../../components/ready/settingsPage/BodyDataSettings/BodyDataSettings';

function SettingsPage() {
  return (
    <div className="SettingsPage">
      <Page
        header={<SearchBar/>}>
        <Column widthPoints = {2}>
          <Group>
            <PersonalSettings/>
          </Group>
          <Group>
            <LoginSettings/>
          </Group>
          <Group>
            <DeleteAccountSettings/>
          </Group>
        </Column>
        <Column widthPoints = {1}>
          <Group>
            <DisplaySettings/>
          </Group>
          <Group>
            <AvatarSettings/>
          </Group>
          <Group>
            <BodyDataSettings/>
          </Group>
        </Column>
      </Page>
    </div>
  );
}

export default SettingsPage;
