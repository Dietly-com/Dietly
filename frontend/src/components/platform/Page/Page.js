import './Page.css';

function Page(props) {
  return (
    <div className="page">
        <div className="page__inner">
            <div className="page_header">
                <div className="page_header__inner">
                    {props.pageHeader}
                </div>
            </div>
            <div className="page_body">
                <div className="page_body__inner">
                    {props.pageBody}
                </div>
            </div>
            <div className="page_footer">
                <div className="page_footer__inner">
                    {props.pageFooter}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page;