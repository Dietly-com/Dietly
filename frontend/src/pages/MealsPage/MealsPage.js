import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import Group from '../../components/utils/Group/Group';
import Section from '../../components/utils/Section/Section';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getUserMeals, getUserMealsNutrients } from '../../api/controllers/UserMealApi';
import { getMe } from '../../api/controllers/MeApi';
import MealsTimeline from '../../components/ready/mealsPage/MealsTimeline/MealsTimeline';
import { useTranslation } from "react-i18next";
import MealsNutrients from '../../components/ready/mealsPage/MealsNutrients/MealsNutrients';

function MealsPage() {
  const { t } = useTranslation();
  let [date, setDate] = useState(dayjs(new Date()));
  let [userMeals, setUserMeals] = useState([]);
  let [userMealsNutrients, setUserMealsNutrients] = useState([]);

  let handleGetUserMeals = (date) => {
    getMe()
    .then(response => {
      let year = date.year().toString();
      let month = (date.month() + 1).toString();
      let day = date.date().toString();
      getUserMeals({where: '"userId":'+ response.data.id + ', "year":' + year + ', "month":' + month + ', "day":' + day, orderBy: 'hour', arrange: 'asc'})
      .then(response => {
        setUserMeals(response.data);
      });
    });
  }

  let handleGetUserMealsNutrients = (date) => {
    getMe()
    .then(response => {
        getUserMealsNutrients({where: '"userId":'+response.data.id+',"year":'+date.year()+',"month":'+(date.month()+1)+',"day":'+date.date()})
        .then(response => {
          setUserMealsNutrients(response.data);
        })
    })
  }

  useEffect(()=>{
    handleGetUserMeals(date);
    handleGetUserMealsNutrients(date);
  }, []);
  return (
    <div className="MealsPage">
      <Page
        bar_header={
          <div style={{display: "flex", justifyContent:"space-between", width: "100%"}}>
            <SearchBar/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={t('Date')}
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={(value)=> {
                setDate(value);
                handleGetUserMeals(value);
                handleGetUserMealsNutrients(date);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </div>
          
        }>
        <Column widthPoints={2}>
          <MealsTimeline userMeals={userMeals}/>
        </Column>
        <Column widthPoints={1}>
          {userMealsNutrients!==undefined &&
            <Group>
              <Section
                header={<div>{t('Summary')}</div>}>
                  <MealsNutrients userMealsNutrients={userMealsNutrients} date={date}/>
              </Section>
            </Group>
          }
        </Column>
      </Page>
    </div>
  );
}

export default MealsPage;
