import './Page.css';

function Page(props) {
  return (
    <div className="page">
        <div className="page__inner" style={{marginTop: props.header !== undefined?152:64, paddingTop: props.toolsBar !== undefined?48:0}}>
            {(props.header !== undefined || props.toolsBar !== undefined) &&
                <div className="page_top">
                    <div className="page_top__inner">
                        {props.header !== undefined &&
                            <div className="page_header">
                                <div className="page_header__inner">
                                    {props.header}
                                </div>
                            </div>
                        }
                        {props.toolsBar !== undefined &&
                            <div className="page_tools_bar">
                                <div className="page_tools_bar__inner">
                                    {props.toolsBar}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
            <div className="page_body">
                <div className="page_body__inner">
                    {props.children}
                </div>
            </div>
            {props.footer !== undefined &&
                <div className="page_footer">
                    <div className="page_footer__inner">
                        {props.footer}
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Page;