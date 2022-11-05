import Card from "../../../../utils/Card/Card";
import Tag from "../../../../utils/Tag/Tag";

function ProductCard(props) {
  return (
    <Card
    image={props.data.file!==null?props.data.file.path: undefined}
    header={
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
            <div>{props.data.name}</div>
            <div style={{fontSize: 8}}>{props.data.quantity + " " + props.data.unit.shortcut}</div>
        </div>
    }
    footer={<Tag>1002 kcal</Tag>}>
        {props.data.description}
    </Card>
    
  )
}

export default ProductCard;