import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import MeDetails from '../../components/ready/mePage/MeDetails/MeDetails';
import Section from '../../components/utils/Section/Section';
import Group from '../../components/utils/Group/Group';

function MePage() {
  return (
    <div className="MePage">
      <Page>
        <Column width = {1000}>
          <Section>
            <MeDetails/>
          </Section>
          <Section
            header={<div>Activity level</div>}>
          </Section>
        </Column>
        <Column>
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
