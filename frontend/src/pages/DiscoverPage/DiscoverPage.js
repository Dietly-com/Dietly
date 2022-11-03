import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Section from '../../components/utils/Section/Section';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function DiscoverPage() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="DiscoverPage">
      <TabContext value={value}>
        <Page
        header={
          <SearchBar/>
        }
        toolsBar={
          <TabList onChange={handleChange}>
            <Tab label="Products" value="1" />
            <Tab label="Recipes" value="2" />
          </TabList>
        }>
          <Column width = {1000}>
            <TabPanel value="1">
              <Section
                header={<div>Products</div>}>
              </Section>
            </TabPanel>
            <TabPanel value="2">
              <Section
                header={<div>Recipes</div>}>
              </Section>
            </TabPanel>
          </Column>
          <Column>
            <TabPanel value="1">
              <Section
                header={<div>Discover products</div>}>
              </Section>
            </TabPanel>
            <TabPanel value="2">
              <Section
                header={<div>Recipes for you</div>}>
              </Section>
            </TabPanel>
          </Column>
        </Page>
      </TabContext>
    </div>
  );
}

export default DiscoverPage;
