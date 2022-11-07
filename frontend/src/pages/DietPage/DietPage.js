import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDiet } from "../../api/controllers/DietApi";
import SearchBar from "../../components/ready/platform/SearchBar/SearchBar";
import Column from "../../components/utils/Column/Column";
import Page from "../../components/utils/Page/Page";
import { useTranslation } from "react-i18next";
import DietHeader from "../../components/ready/dietPage/DietHeader/DietHeader";

function DietPage() {
    const { t } = useTranslation();
    let { id } = useParams();
    const [diet, setDiet] = useState();

    useEffect(()=>{
        getDiet(id)
        .then(response => {
          setDiet(response.data);
        });
      }, []);

    return (
      <div className="DietPage">
        <Page
        bar_header={<SearchBar/>}
        header={
          diet!==undefined &&
            <DietHeader data={diet}/>
          }>
          <Column widthPoints = {2}>
          </Column>
          <Column widthPoints = {1}>
          </Column>
        </Page>
      </div>
    );
  }
  
  export default DietPage;