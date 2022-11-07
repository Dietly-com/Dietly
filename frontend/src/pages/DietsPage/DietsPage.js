import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Section from '../../components/utils/Section/Section';
import { useEffect, useState } from 'react';
import { getDiets } from '../../api/controllers/DietApi';
import { getUserActiveDiets } from '../../api/controllers/UserActiveDietApi';
import DietCard from '../../components/ready/platform/cards/DietCard/DietCard';
import { getMe } from "../../api/controllers/MeApi";
import CardsGrid from '../../components/utils/CardsGrid/CardsGrid';
import { useTranslation } from "react-i18next";

function DietsPage() {
  const { t } = useTranslation();
  const [meDiets, setMeDiets] = useState();
  const [diets, setDiets] = useState();
  const [meUserActiveDiets, setMeUserActiveDiets] = useState();

  useEffect(()=>{
    getMe()
    .then(response => {
      getDiets({where: '"ownerId":'+ response.data.id})
      .then(response => {
        setMeDiets(response.data);
      });

      getUserActiveDiets({where: '"userId":'+ response.data.id})
      .then(response=> {
        setMeUserActiveDiets(response.data);
      })
    });
    getDiets()
    .then(response => {
      setDiets(response.data);
    });
  }, []);

  return (
    <div className="DietsPage">
      <Page
      bar_header={<SearchBar/>}>
        <Column width = {1000}>
          <Section
            header={<div>{t('Your diets')}</div>}>
              {meDiets !== undefined &&
                <CardsGrid>
                  {meDiets.map((diet, i) => <DietCard data={diet} key={i}/>)}
                </CardsGrid>
              }
          </Section>
          <Section
            header={<div>{t('Discover diets')}</div>}>
              {diets !== undefined &&
                <CardsGrid>
                  {diets.map((diet, i) => <DietCard data={diet} key={i}/>)}
                </CardsGrid>
              }
          </Section>
        </Column>
        <Column>
          <Section
            header={<div>{t('Your active diets')}</div>}>
              {meUserActiveDiets !== undefined &&
                <CardsGrid>
                  {meUserActiveDiets.map((meUserActiveDiet, i) => <DietCard data={meUserActiveDiet.diet} key={i}/>)}
                </CardsGrid>
              }
          </Section>
        </Column>
      </Page>
    </div>
  );
}

export default DietsPage;
