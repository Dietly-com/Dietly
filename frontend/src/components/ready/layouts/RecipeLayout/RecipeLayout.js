import { Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../../utils/Layout/Layout";
import LayoutGroup from "../../../utils/LayoutGroup/LayoutGroup";
import LayoutSection from "../../../utils/LayoutSection/LayoutSection";
import UnitField from "../../platform/UnitField/UnitField";

function RecipeLayout(props) {
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
        console.log(saveLayoutData);
    }

    const [viewLayoutFileData, setViewLayoutFileData] = useState(props.data.file);
    console.log(viewLayoutFileData);
    const handleChangeLayoutFileData = (value) => {
        setViewLayoutFileData({path: value});
        props.onChangeLayoutFileData({path: value});
    }

    const defaultValue = (value)=>{
        if(value!==undefined) return value;
        else return null;
    }

    return (
        <Layout>
            {viewLayoutFileData!==null&&viewLayoutFileData.path!==null&&viewLayoutFileData.path!==""&&
                <LayoutSection>
                    <center>
                        <img src={viewLayoutFileData.path} style={{width: "30%", margin: "64px 0px"}}/>
                    </center>
                </LayoutSection>
            }
            <LayoutGroup>
                <LayoutSection
                    header={"Basic infromation"}>
                    <TextField id="standard-basic" label={t('Name')} defaultValue={defaultValue(viewLayoutData.name)} variant="standard" type="text" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutData("name", event.target.value)}}/>
                    <TextField id="standard-basic" label={t('Category')} defaultValue={defaultValue(viewLayoutData.category)} variant="standard" type="text" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutData("category", event.target.value)}}/>
                    <UnitField defaultValue={defaultValue(viewLayoutData.unitId)} style={standardFieldStyle} onChange={(value)=>{handleChangeLayoutData("unitId", value)}}/>
                    <TextField id="standard-basic" label={t('Quantity')} defaultValue={defaultValue(viewLayoutData.quantity)} variant="standard" type="number" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutData("quantity", event.target.valueAsNumber)}}/>
                    <TextField id="standard-basic" label={t('Photo path')} defaultValue={viewLayoutFileData!==null?viewLayoutFileData.path:""} variant="standard" type="text" style={standardFieldStyle} onChange={(event)=>{handleChangeLayoutFileData(event.target.value)}}/>
                    <TextField id="standard-basic" label={t('Description')} defaultValue={defaultValue(viewLayoutData.description)} multiline variant="standard" type="text" fullWidth onChange={(event)=>{handleChangeLayoutData("description", event.target.value)}}/>
                </LayoutSection>
                <LayoutSection
                    header={"Additional information"}>
                    <div style={{borderBottom: "1px solid black", width: standardFieldStyle.width}}>
                        {t('Vegan')}
                        <Checkbox id="standard-basic" label={t('Vegan')} defaultValue={defaultValue(viewLayoutData.vegan)} onChange={(event)=>{handleChangeLayoutData("vegan", event.target.checked)}}/>
                    </div>
                    <div style={{borderBottom: "1px solid black", width: standardFieldStyle.width}}>
                        {t('Vegetarian')}
                        <Checkbox id="standard-basic" label={t('Vegetarian')} defaultValue={defaultValue(viewLayoutData.vegetarian)} onChange={(event)=>{handleChangeLayoutData("vegetarian", event.target.checked)}}/>
                    </div>
                </LayoutSection>
                <LayoutSection
                    header={"Preparation infromation"}>
                    <TextField id="standard-basic" label={t('Preparation')} defaultValue={defaultValue(viewLayoutData.preparation)} multiline variant="standard" type="text" fullWidth onChange={(event)=>{handleChangeLayoutData("preparation", event.target.value)}}/>
                </LayoutSection>
            </LayoutGroup>
            <LayoutSection
                header={"Products"}>
            </LayoutSection>
        </Layout>
    )
}

export default RecipeLayout;