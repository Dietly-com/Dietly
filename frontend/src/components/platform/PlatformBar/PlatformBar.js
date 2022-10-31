import './PlatformBar.css';

function PlatformBar(props) {
  return (
    <div className="platform_bar">
        <div className="platform_bar__inner">
            <div className="platform_bar_header">
                {props.platformBarHeader}
            </div>
            <div className="platform_bar_body">
                <div className="platform_bar_body__inner">
                    {props.platformBarBody}
                </div>
            </div>
            <div className="platform_bar_footer">
                {props.platformBarFooter}
            </div>
        </div>
    </div>
  )
}

export default PlatformBar;