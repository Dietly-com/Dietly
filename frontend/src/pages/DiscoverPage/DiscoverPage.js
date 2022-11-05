import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Section from '../../components/utils/Section/Section';
import { useEffect, useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCard from '../../components/ready/platform/cards/ProductCard/ProductCard';
import { getProducts } from '../../api/controllers/ProductApi';
import NoToDi from '../../components/ready/platform/NoToDi/NoToDi'

function DiscoverPage() {
  const [products, setProducts] = useState();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    getProducts()
    .then(response => {
      setProducts(response.data);
      console.log(response.data);
    })
  }, []);


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
                  {products !== undefined &&
                    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 32}}>
                      {products.map((product, i) => <ProductCard data={product} key={i}/>)}
                    </div>
                  }
                  <NoToDi show={products === undefined}/>
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
                header={<div>Popular products</div>}>
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
