import { Button, MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";
import { getMe, patchMe } from "../../../../api/controllers/MeApi";
import { useSettings } from "../../../../hooks/useSettings";
import Section from "../../../utils/Section/Section";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

function DisplaySettings() {
    var [
        displayTheme, setDisplayTheme, displayLanguage, setDisplayLanguage
      ] = useSettings();

      const themes = [
        {
        value: 'light:LIGHT',
        label: 'Light',
        },
        {
        value: 'dark:DARK',
        label: 'Dark',
        }
    ];

    const languages = [
        {
        value: 'pl:PL',
        label: 'Polish',
        },
        {
        value: 'en:EN',
        label: 'English',
        }
    ];
    
      useEffect(()=>{
        getMe()
        .then(response => {
            setDisplayTheme(response.data.displayTheme);
            setDisplayLanguage(response.data.displayLanguage);
        })
      }, [])
    return (
        <Section
            header={
                <div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><DisplaySettingsIcon/><div>Display Settings</div></div>
            }
            footer={
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                    <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{patchMe({displayLanguage: displayLanguage, displayTheme: displayTheme})}}>Save</Button>
                </div>
            }>
            <TextField id="standard-basic" label="Theme" value={displayTheme} defaultValue="Theme" variant="standard" select type="text" fullWidth onChange={(event)=>{setDisplayTheme(event.target.value); localStorage.setItem("displayTheme", event.target.value)}}>
                {themes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField id="standard-basic" label="Language" value={displayLanguage} defaultValue="Language" variant="standard" select type="text" fullWidth onChange={(event)=>{setDisplayLanguage(event.target.value); localStorage.setItem("displayLanguage", event.target.value)}}>
                {languages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Section>
    );
}

export default DisplaySettings;