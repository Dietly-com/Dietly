import './Page.css';

function Page(props) {
  return (
    <div className="page">
        <div className="page__inner">
            {props.header !== undefined &&
                <div className="page_header">
                    <div className="page_header__inner">
                        {props.header}
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