import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { getMe, patchMe } from "../../../../api/controllers/MeApi";
import { useSettings } from "../../../../hooks/useSettings";
import Section from "../../../utils/Section/Section";
import PasswordIcon from '@mui/icons-material/Password';

function LoginSettings() {
    var [
        password, setPassword, login, setLogin
      ] = useSettings();
    
      useEffect(()=>{
        getMe()
        .then(response => {
            setLogin(response.data.login);
        })
      }, [])
    return (
        <Section
            header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><PasswordIcon/><div>Login Settings</div></div>}
            footer={
            <div style={{display: "flex", flexDirection: "row-reverse"}}>
                <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{patchMe({login:login, password:password})}}>Save</Button>
            </div>
            }>
            <TextField id="standard-basic" label="Login" value={login} defaultValue="Login" variant="standard" type="text" onChange={(event)=>{setLogin(event.target.value)}}/>
            <TextField id="standard-basic" label="Password" type="password" autoComplete="current-password" variant="standard" onChange={(event)=>{setPassword(event.target.value)}}/>
        </Section>
    );
}

export default LoginSettings;