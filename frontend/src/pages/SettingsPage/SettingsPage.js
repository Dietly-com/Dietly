import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import Group from '../../components/utils/Group/Group';
import Section from '../../components/utils/Section/Section';
import SearchBar from '../../components/ready/platform/SearchBar/SearchBar';
import { Button, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { deleteMe, getMe, patchMe } from '../../api/controllers/MeApi';
import { patchFile } from '../../api/controllers/FileApi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PhotoIcon from '@mui/icons-material/Photo';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { removeToken } from '../../api/utils/TokenUtils';

function SettingsPage() {
  var [name, setName] = useState("");
  var [surname, setSurname] = useState();
  var [email, setEmail] = useState();
  var [phone, setPhone] = useState();

  var [login, setLogin] = useState();
  var [password, setPassword] = useState();

  var [filePath, setFilePath] = useState();
  var [fileId, setFileId] = useState();
  let updateFilePath = (fileId, filePath) => {
    patchFile(fileId, {path: filePath});
  }

  var [displayTheme, setDisplayTheme] = useState();
  var [displayLanguage, setDisplayLanguage] = useState();
  
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

  var [height, setHeight] = useState();
  var [weight, setWeight] = useState();

  useEffect(()=>{
    getMe()
    .then(response => {
        setName(response.data.name);
        setSurname(response.data.surname);
        setEmail(response.data.email);
        setPhone(response.data.phone);

        setLogin(response.data.login);

        setFilePath(response.data.file.path);
        setFileId(response.data.fileId);

        setDisplayTheme(response.data.displayTheme);
        setDisplayLanguage(response.data.displayLanguage);

        setHeight(response.data.height);
        setWeight(response.data.weight);
    })
  }, [])

  return (
    <div className="SettingsPage">
      <Page
      header={<SearchBar/>}>
        <Column widthPoints = {2}>
          <Group>
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
          </Group>
          <Group>
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
          </Group>
          <Group>
            <Section
              header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><PersonRemoveIcon/><div>Delete Account</div></div>}>
                <Button variant="text" style={{ width: 70}} onClick={()=>{deleteMe(); removeToken(); window.location = "/sign-in"}}>Delete</Button>
            </Section>
          </Group>
        </Column>
        <Column widthPoints = {1}>
          <Group>
            <Section
              header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><DisplaySettingsIcon/><div>Display Settings</div></div>}
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
          </Group>
          <Group>
            <Section
              header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><PhotoIcon/><div>Avatar</div></div>}
              footer={
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                  <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{updateFilePath(fileId, filePath)}}>Save</Button>
                </div>
              }>
              <TextField id="standard-basic" label="Profile picture path" defaultValue="Profile picture path" value={filePath} variant="standard" type="url" fullWidth onChange={(event)=>{setFilePath(event.target.value)}}/>
              <center>
                <img src={filePath} style={{width: "30%", margin: "64px 0px"}}/>
              </center>
            </Section>
          </Group>
          <Group>
            <Section
              header={<div style={{display: "flex",flexDirection: "row", alignItems:"center", gap:8}}><FitnessCenterIcon/><div>Body data</div></div>}
              footer={
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                  <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: 200}} onClick={()=>{patchMe({height:Number(height), weight:Number(weight)})}}>Save</Button>
                </div>
              }>
              <TextField id="standard-basic" label="Height" value={height} defaultValue="Height" variant="standard" type="number" onChange={(event)=>{setHeight(event.target.value)}}/>
              <TextField id="standard-basic" label="Weight" value={weight} defaultValue="Weight" variant="standard" type="number" onChange={(event)=>{setWeight(event.target.value)}}/>
            </Section>
          </Group>
        </Column>
      </Page>
    </div>
  );
}

export default SettingsPage;
