import './Column.css';

function Column(props) {
  var columnStyle = {};
  if(props.style !== undefined) columnStyle=props.style;
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