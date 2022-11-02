import PlatformBar from "../../../utils/PlatformBar/PlatformBar";
import Button from '@mui/material/Button'
import '../../../utils/PlatformBar/PlatformBar';
import Logo from "../Logo/Logo";

function StandardPlatformBar() {
    return (
        <PlatformBar
            header={
                <div className="platform_bar_header__inner">
                    <Logo/>
                </div>
            }
            body={
                <div></div>
            }
            footer={
                <div className="platform_bar_footer__inner">
                    <Button variant="contained" style={{backgroundColor: '#CF113F'}} href='/sign-on'>
                        Sign on
                    </Button>
                    <Button variant="contained" style={{backgroundColor: '#349951'}} href='/sign-in'>
                        Sign in
                    </Button>
                </div>
            }/>
    );
}

export default StandardPlatformBar;