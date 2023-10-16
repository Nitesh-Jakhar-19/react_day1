import "./Item.css";
function Item(props) {
  const name = props.name;
  return <div className="item">{name}</div>;
}
export default Item;
