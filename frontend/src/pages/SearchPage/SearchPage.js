import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Section from '../../components/utils/Section/Section';

function SearchPage() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="SearchPage">
      <TabContext value={value}>
        <Page
        header={
          <SearchBar/>
        }
        toolsBar={
          <TabList onChange={handleChange}>
            <Tab label="Products" value="1" />
            <Tab label="Recipes" value="2" />
            <Tab label="Diets" value="3" />
          </TabList>
        }>
          <Column width = {1000}>
          <Section>
            <TabPanel value="1">
              Searched products
            </TabPanel>
            <TabPanel value="2">
              Searched recipes
            </TabPanel>
            <TabPanel value="3">
              Searched diets
            </TabPanel>
          </Section>
          </Column>
        </Page>
      </TabContext>
    </div>
  );
}

export default SearchPage;
