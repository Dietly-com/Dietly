import Page from '../../components/utils/Page/Page';

import Column from '../../components/utils/Column/Column';
import Title from '../../components/ready/startPage/Title/Title';
import FormBox from '../../components/ready/startPage/FormBox/FormBox';
import { Button, MenuItem, Step, StepLabel, Stepper, TextField } from '@mui/material';
import DragonFruit from '../../components/ready/startPage/DragonFruit/DragonFruit';
import { useSignOn } from '../../hooks/useSignOn';

function SignOnPage() {
  var [
    stage, setStage,
    name, setName, surname, setSurname, email, setEmail, phone, setPhone,
    login, setLogin, password, setPassword,
    height, setHeight, weight, setWeight, activeLevel, setActiveLevel,
    filePath, setFilePath,
    displayTheme, setDisplayTheme, displayLanguage, setDisplayLanguage,
    signOn,
    themes, languages, activeLevels, steps
  ] = useSignOn();
  
  return (
    <div className="SignOnPage" style={{width: '100%'}}>
      <Page>
        <Column>
          <Title title='Dietly' subtitle='Health life'/>
        </Column>
        <Column widthPoints = {1}>
          <FormBox
            header={
              <div style={{display: 'flex', flexDirection: "column", gap: "32px"}}>
                <div>Sign on</div>
                <Stepper activeStep={stage} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            }
            footer={
              <div style={{display: 'flex', flexDirection: "row-reverse", justifyContent: "space-between"}}>
                {stage<4 &&
                  <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: '45%'}} onClick={()=>{setStage(++stage)}}>Next</Button>
                }
                {stage === 4 &&
                  <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: '45%'}} onClick={()=>{
                    let data = {
                      name: name, surname: surname, email: email, phone: phone,
                      login: login, password: password,
                      height: Number(height), weight: Number(weight), activeLevel: Number(activeLevel),
                      displayTheme: displayTheme, displayLanguage: displayLanguage,
                      file: {
                        create: {
                          path: filePath
                        }
                      }
                    }
                    signOn(data);
                  }}>Submit</Button>
                }
                {stage>0 &&
                  <Button variant="contained" style={{backgroundColor: '#6D9EE6', width: '45%'}} onClick={()=>{setStage(--stage)}}>Previous</Button>
                }
              </div>
            }>
              {stage===0 &&
                <div>
                  <TextField id="standard-basic" label="First name" defaultValue={name} variant="standard" type="text" fullWidth onChange={(event)=>{setName(event.target.value)}}/>
                  <TextField id="standard-basic" label="Last name" defaultValue={surname} variant="standard" type="text" fullWidth onChange={(event)=>{setSurname(event.target.value)}}/>
                  <TextField id="standard-basic" label="Email" defaultValue={email} variant="standard" type="email" fullWidth onChange={(event)=>{setEmail(event.target.value)}}/>
                  <TextField id="standard-basic" label="Phone" defaultValue={phone} variant="standard" type="tel" fullWidth onChange={(event)=>{setPhone(event.target.value)}}/>
                </div>
              }
              {stage===1 &&
                <div>
                  <TextField id="standard-basic" label="Login" defaultValue={login} variant="standard" type="text" fullWidth onChange={(event)=>{setLogin(event.target.value)}}/>
                  <TextField id="standard-basic" label="Password" defaultValue={password} type="password" autoComplete="current-password" variant="standard" fullWidth onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
              }
              {stage===2 &&
                <div>
                  <TextField id="standard-basic" label="Height" defaultValue={height} variant="standard" type="number" fullWidth onChange={(event)=>{setHeight(event.target.value)}}/>
                  <TextField id="standard-basic" label="Weight" defaultValue={weight} variant="standard" type="number" fullWidth onChange={(event)=>{setWeight(event.target.value)}}/>
                  <TextField id="standard-basic" label="Active level" defaultValue={activeLevel} variant="standard" select type="number" fullWidth onChange={(event)=>{setActiveLevel(event.target.value)}}>
                    {activeLevels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              }
              {stage===3 &&
                <div>
                  <TextField id="standard-basic" label="Profile picture path" defaultValue={filePath} variant="standard" type="url" fullWidth onChange={(event)=>{setFilePath(event.target.value)}}/>
                  <center>
                    <img src={filePath} style={{width: "50%", margin: "64px 0px"}}/>
                  </center>
                </div>
              }
              {stage===4 &&
                <div>
                  <TextField id="standard-basic" label="Theme" defaultValue={displayTheme} variant="standard" select type="text" fullWidth onChange={(event)=>{setDisplayTheme(event.target.value)}}>
                    {themes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField id="standard-basic" label="Language" defaultValue={displayLanguage} variant="standard" select type="text" fullWidth onChange={(event)=>{setDisplayLanguage(event.target.value)}}>
                    {languages.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              }
          </FormBox>
        </Column>
        <DragonFruit/>
      </Page>
    </div>
  );
}

export default SignOnPage;
