import './Column.css';

function Column(props) {
  var columnStyle = {};
  if(props.style !== undefined) columnStyle=props.style;
  if(props.widthPoints !== undefined) {
    if(props.widthPoints === 1) columnStyle.width = 600;
    if(props.widthPoints === 2) columnStyle.width = 1000;
  }
  if(props.width !== undefined) columnStyle.width = props.width;
  return (
    <div className="column" style={columnStyle}>
        <div className="column__inner">
            {props.children}
        </div>
    </div>
  )
}

export default Column;