import { TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../utils/Layout/Layout";
import LayoutGroup from "../../../utils/LayoutGroup/LayoutGroup";
import LayoutSection from "../../../utils/LayoutSection/LayoutSection";

function DietMealLayout(props) {
    const { t } = useTranslation();
    const standardFieldStyle = {width: "45%"};

    const [viewLayoutData, setViewLayoutData] = useState(props.data);
    const [saveLayoutData, setSaveLayoutData] = useState({});
    const handleChangeLayoutData = (key, value) => {
        let tempViewLayoutData = viewLayoutData;
        tempViewLayoutData[key] = value;
        setViewLayoutData(tempViewLayoutData);

        let tempSaveLayoutData = saveLayoutData;
        tempSaveLayoutData[key] = value;
        setSaveLayoutData(tempSaveLayoutData);
        props.onChangeLayoutData(saveLayoutData);
    }

    const defaultValue = (value)=>{
        if(value!==undefined) return value;
        else return null;
    }

    return (
        <Layout>
            <LayoutGroup>
                <LayoutSection
                    header={"Details"}>
                    <TextField id="standard-basic" label={t('Name')} defaultValue={defaultValue(viewLayoutData.name)} variant="standard" type="text" fullWidth onChange={(event)=>{handleChangeLayoutData("name", event.target.value)}}/>
                    <TextField id="standard-basic" label={t('Day')} defaultValue={defaultValue(viewLayoutData.day)} variant="standard" type="number" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutData("day", event.target.valueAsNumber)}}/>
                    <TextField id="standard-basic" label={t('Time')} defaultValue={defaultValue(viewLayoutData.time)} variant="standard" type="time" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutData("time", event.target.valueAsDate)}}/>
                </LayoutSection>
            </LayoutGroup>
            <LayoutSection
                header={"Products"}>
            </LayoutSection>
            <LayoutSection
                header={"Recipes"}>
            </LayoutSection>
        </Layout>
    )
}

export default DietMealLayout;