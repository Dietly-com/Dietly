import Page from '../../components/utils/Page/Page';
import Column from '../../components/utils/Column/Column';
import { Button, TextField } from '@mui/material';
import Title from '../../components/ready/startPage/Title/Title';
import DragonFruit from '../../components/ready/startPage/DragonFruit/DragonFruit';
import FormBox from '../../components/ready/startPage/FormBox/FormBox';
import { useSignIn} from '../../hooks/useSignIn';

function SignInPage() {
  var [login, setLogin, password, setPassword, signIn] = useSignIn();
  return (
    <div className="SignInPage" style={{width: '100%'}}>
      <Page>
        <Column>
          <Title title='Dietly' subtitle='Health life'/>
        </Column>
        <Column width = {500}>
          <FormBox
            header='Sign in'
            footer={
              <Button variant="contained" style={{backgroundColor: '#6D9EE6'}} fullWidth onClick={()=>{signIn(login, password)}}>Submit</Button>
            }>
            <TextField id="standard-basic" label="Login" variant="standard" fullWidth onChange={(event)=>{setLogin(event.target.value)}}/>
            <TextField id="standard-basic" label="Password" type="password" autoComplete="current-password" variant="standard" fullWidth onChange={(event)=>{setPassword(event.target.value)}}/>
          </FormBox>
        </Column>
        <DragonFruit/>
      </Page>
    </div>
  );
}

export default SignInPage;
