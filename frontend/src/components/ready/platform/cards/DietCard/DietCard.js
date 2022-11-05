import Card from "../../../../utils/Card/Card";
import Tag from "../../../../utils/Tag/Tag";

function DietCard(props) {
  return (
    <Card
    image={props.data.file.path}
    header={props.data.name}>
        {props.data.description}
    </Card>
    
  )
}

export default DietCard;