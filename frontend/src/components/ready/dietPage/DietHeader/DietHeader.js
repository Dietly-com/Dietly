import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { deleteDiet } from "../../../../api/controllers/DietApi";
import { getMe } from "../../../../api/controllers/MeApi";
import PageHeader from "../../../utils/PageHeader/PageHeader";
import Tag from "../../../utils/Tag/Tag";

function DietHeader(props) {
    const { t } = useTranslation();
    const [meId, setMeId] = useState();

    let handleDeleteDiet = (id) => {
        deleteDiet(id)
        .then(response => {
            window.location = "/home";
        })
    }

    useEffect(()=>{
        getMe()
        .then(response => {
            setMeId(response.data.id);
        });
    }, []);
    return (
        <PageHeader
              image={props.data.file!==null?props.data.file.path: undefined}
              header={
                <div style={{display: "flex", flexDirection: "column", gap: 4}}>
                  <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 8}}>
                    <div>{props.data.name}</div>
                  </div>
                  <div style={{fontSize: 11, fontWeight: 500, width: 500}}>
                    {props.data.description}
                  </div>
                  <div style={{display: "flex", flexDirection: "row", gap: 8}}>
                    {meId === props.data.ownerId &&
                      <Tag>{t('Your')}</Tag>
                    }
                    {100 <= props.data.views &&
                      <Tag backgroundColor={"#ffc107"}>{t('Popular')}</Tag>
                    }
                  </div>
                </div>
              }
              footer={
                <div style={{display: "flex", flexDirection: "row", gap: 8}}>
                  <Button variant="contained">
                      {t('Active')}
                  </Button>
                  {meId === props.data.ownerId &&
                    <Button variant="contained">
                      {t('Edit')}
                    </Button>
                  }
                  {meId === props.data.ownerId &&
                    <Button variant="contained" onClick={()=>{handleDeleteDiet(props.data.id)}}>
                      {t('Delete')}
                    </Button>
                  }
                </div>
              }>
            </PageHeader>
    )
}
  
export default DietHeader;