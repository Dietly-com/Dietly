import { Button, TextField } from "@mui/material";
import { getMe, patchMe } from "../../../../api/controllers/MeApi";
import { useSettings } from "../../../../hooks/useSettings";
import Section from "../../../utils/Section/Section";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect } from "react";

function PersonalSettings() {
    var [
        name, setName, surname, setSurname, email, setEmail, phone, setPhone
      ] = useSettings();
      useEffect(()=>{
        getMe()
        .then(response => {
            setName(response.data.name);
            setSurname(response.data.surname);
            setEmail(response.data.email);
            setPhone(response.data.phone);
        })
      }, [])
    return (
        <Section
            header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><AccountCircleIcon/><div>Personal Settings</div></div>}
            footer={
            <div style={{display: "flex", flexDirection: "row-reverse"}}>
                <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{patchMe({name: name, surname: surname, email:email, phone: phone})}}>Save</Button>
            </div>
            }>
            <TextField id="standard-basic" label="First name" value={name} variant="standard" type="text" fullWidth onChange={(event)=>{setName(event.target.value)}}/>
            <TextField id="standard-basic" label="Last name" value={surname} variant="standard" type="text" fullWidth onChange={(event)=>{setSurname(event.target.value)}}/>
            <TextField id="standard-basic" label="Email" value={email} defaultValue="Email" variant="standard" type="email" fullWidth onChange={(event)=>{setEmail(event.target.value)}}/>
            <TextField id="standard-basic" label="Phone" value={phone} defaultValue="Phone" variant="standard" type="tel" fullWidth onChange={(event)=>{setPhone(event.target.value)}}/>
        </Section>
    );
}

export default PersonalSettings;