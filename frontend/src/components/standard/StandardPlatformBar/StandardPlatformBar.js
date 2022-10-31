import PlatformBar from "../../platform/PlatformBar/PlatformBar";
import Button from '@mui/material/Button'
import '../../platform/PlatformBar/PlatformBar';
import logo from '../../../icons/logo.png';

function StandardPlatformBar() {
    return (
        <PlatformBar
            platformBarHeader={
                <div className="platform_bar_header__inner">
                    <div style={{height: 48, width: 48, display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                        <img src={logo} style={{height: 30, width: 30}}/>
                    </div>
                </div>
            }
            platformBarBody={
                <div></div>
            }
            platformBarFooter={
                <div className="platform_bar_footer__inner">
                    <Button variant="contained" style={{backgroundColor: '#CF113F'}}>
                        Sign on
                    </Button>
                    <Button variant="contained" style={{backgroundColor: '#349951'}}>
                        Sign in
                    </Button>
                </div>
            }/>
    );
}

export default StandardPlatformBar;