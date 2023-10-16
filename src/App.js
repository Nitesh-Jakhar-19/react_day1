import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

function App() {
  const response = [
    {
      itemName: "Item 1",
      itemDay: "1",
      itemMonth: "april",
      itemYear: "1998",
    },
    {
      itemName: "Item 2",
      itemDay: "2",
      itemMonth: "May",
      itemYear: "1999",
    },
    {
      itemName: "Item 3",
      itemDay: "3",
      itemMonth: "june",
      itemYear: "2000",
    },
    {
      itemName: "Item 4",
      itemDay: "4",
      itemMonth: "july",
      itemYear: "2001 ",
    },
  ];
  return (
    <div>
      <Item name={response[0].itemName} />
      <ItemDate
        day={response[0].itemDay}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      />
      <Item name={response[1].itemName} />
      <ItemDate
        day={response[1].itemDay}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      />
      <Item name={response[2].itemName} />
      <ItemDate
        day={response[2].itemDay}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      />
      <Item name={response[3].itemName} />
      <ItemDate
        day={response[3].itemDay}
        month={response[2].itemMonth}
        year={response[3].itemYear}
      />
      <div className="App">Hello React JS!!!</div>
    </div>
  );
}

export default App;
