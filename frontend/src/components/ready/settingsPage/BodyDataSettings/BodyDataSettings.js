import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { getMe, patchMe } from "../../../../api/controllers/MeApi";
import { useSettings } from "../../../../hooks/useSettings";
import Section from "../../../utils/Section/Section";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function BodyDataSettings() {
    var [
        height, setHeight, weight, setWeight,
      ] = useSettings();
    
      useEffect(()=>{
        getMe()
        .then(response => {
            setHeight(response.data.height);
            setWeight(response.data.weight);
        })
      }, [])
    return (
        <Section
            header={
                <div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><FitnessCenterIcon/><div>Body data</div></div>
            }
            footer={
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                    <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{patchMe({height:Number(height), weight:Number(weight)})}}>Save</Button>
                </div>
            }>
            <TextField id="standard-basic" label="Height" value={height} defaultValue="Height" variant="standard" type="number" onChange={(event)=>{setHeight(event.target.value)}}/>
            <TextField id="standard-basic" label="Weight" value={weight} defaultValue="Weight" variant="standard" type="number" onChange={(event)=>{setWeight(event.target.value)}}/>
        </Section>
    );
}

export default BodyDataSettings;