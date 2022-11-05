import './Tag.css';

function Tag(props) {
  return (
    <div className="tag">
        <div className="tag__inner">
            {props.children}
        </div>
    </div>
  )
}

export default Tag;