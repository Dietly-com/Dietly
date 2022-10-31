import './AppBar.css';

function AppBar(props) {
  return (
    <div className="app_bar">
        <div className="app_bar__inner">
            <div className="app_bar_header">
                <div className="app_bar_header__inner">
                    {props.appBarHeader}
                </div>
            </div>
            <div className="app_bar_body">
                <div className="app_bar_body__inner">
                    {props.appBarBody}
                </div>
            </div>
            <div className="app_bar_footer">
                <div className="app_bar_footer__inner">
                    {props.appBarFooter}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBar;