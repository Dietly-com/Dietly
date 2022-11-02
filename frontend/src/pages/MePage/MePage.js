import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import MeDetails from '../../components/ready/mePage/MeDetails/MeDetails';
import Section from '../../components/utils/Section/Section';
import Group from '../../components/utils/Group/Group';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';

function MePage() {
  return (
    <div className="MePage">
      <Page
      header={<SearchBar/>}>
        <Column widthPoints = {2}>
          <Section>
            <MeDetails/>
          </Section>
          <Section
            header={<div>Activity level</div>}>
              abc
          </Section>
        </Column>
        <Column widthPoints = {1}>
          <Group>
            <Section
              header={<div>Badges</div>}>
            </Section>
          </Group>
          <Group>
            <Section
              header={<div>Personal Bests</div>}>
            </Section>
          </Group>
        </Column>
      </Page>
    </div>
  );
}

export default MePage;
