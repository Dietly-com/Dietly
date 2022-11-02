import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import Group from '../../components/utils/Group/Group';
import Section from '../../components/utils/Section/Section';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';

function SettingsPage() {
  return (
    <div className="SettingsPage">
      <Page
      header={<SearchBar/>}>
        <Column widthPoints = {2}>
          <Group>
            <Section
              header={<div>Personal Settings</div>}>
            </Section>
          </Group>
          <Group>
            <Section
              header={<div>Login Settings</div>}>
            </Section>
          </Group>
        </Column>
        <Column widthPoints = {1}>
          <Group>
              <Section
                header={<div>Profile picture Settings</div>}>
              </Section>
            </Group>
            <Group>
              <Section
                header={<div>Display Settings</div>}>
              </Section>
            </Group>
        </Column>
      </Page>
    </div>
  );
}

export default SettingsPage;
