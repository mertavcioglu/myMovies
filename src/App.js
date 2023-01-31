import React from "react";
import "./App.css";
import Collapse from "./components/Collapse";
import Card from "./components/Card";

const cardSpecs = [
  {
    id: "1",
    title: "Toilet Paper",
    description:
      "In nec mi enim. Curabitur arcu massa, dapibus ut metus lobortis, vehicula rutrum magna. In vel lectus et tellus hendrerit blandit ac in ipsum.",
    lastUpdated: "3 days ago",
    image:
      "https://img.freepik.com/premium-vector/toilet-tissue-paper-roll-icon-illustration_138676-1035.jpg?auto=format&h=200",
  },
  {
    id: "2",
    title: "New TV",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    lastUpdated: "63 days ago",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/420/691/small/cute-tv-character-flat-cartoon-emoticon-template-design-illustration-vector.jpg",
  },
  {
    id: "3",
    title: "Car Insurance",
    description:
      "Nam ullamcorper nisl quam, vitae vulputate metus congue et. Class aptent taciti sociosqu ad litora torquent per conubia nostra",
    lastUpdated: "13 days ago",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/001/237/823/small/policy-of-a-car-insurance-company.jpg",
  },
  {
    id: "4",
    title: "New Desk (Wooden)",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    lastUpdated: "2 days ago",
    image:
      "https://icon-library.com/images/minecraft-chest-icon/minecraft-chest-icon-19.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group col w-100">
          <Collapse /* href="collapseExample0" */>
            <Card
              key={cardSpecs[0].id}
              cardTitle={cardSpecs[0].title}
              cardDescription={cardSpecs[0].description}
              cardLastUpdated={cardSpecs[0].lastUpdated}
              cardImage={cardSpecs[0].image}
            />
          </Collapse>
        </div>
        <div className="card-group col w-100">
          <Collapse /* href="collapseExample1" */>
            <Card
              key={cardSpecs[1].id}
              cardTitle={cardSpecs[1].title}
              cardDescription={cardSpecs[1].description}
              cardLastUpdated={cardSpecs[1].lastUpdated}
              cardImage={cardSpecs[1].image}
            />
          </Collapse>
        </div>
        <div className="card-group col w-100">
          <Collapse /* href="collapseExample2" */>
            <Card
              key={cardSpecs[2].id}
              cardTitle={cardSpecs[2].title}
              cardDescription={cardSpecs[2].description}
              cardLastUpdated={cardSpecs[2].lastUpdated}
              cardImage={cardSpecs[2].image}
            />
          </Collapse>
        </div>
        <div className="card-group col w-100">
          <Collapse /* href="collapseExample3" */>
            <Card
              key={cardSpecs[3].id}
              cardTitle={cardSpecs[3].title}
              cardDescription={cardSpecs[3].description}
              cardLastUpdated={cardSpecs[3].lastUpdated}
              cardImage={cardSpecs[3].image}
            />
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default App;
