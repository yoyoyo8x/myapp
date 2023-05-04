import "../css/NewUser.css";
import Card from "../component/Card/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
// import users from "../user.json"

const users = [
  {
    name: "Lelah Nichols",
    place: "Troy, MI",
    img: "img/person1.png",
    tag: ["clothes", "stem"],
  },
  {
    name: "Jesus Weiss",
    place: "Fort Worth, TX",
    img: "img/person2.png",
    tag: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    place: "Austin, TX",
    img: "img/person3.png",
    tag: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    place: "Cincinnati, OH",
    img: "img/person4.png",
    tag: ["Maintenance", "gear", "frame", "repair"],
  },
  {
    name: "Amy Campbell",
    place: "Warrior, AL",
    img: "img/person5.png",
    tag: ["music", "disks"],
  },
  {
    name: "Anthony S. Morin",
    place: "Lyndhurst, NJ",
    img: "img/person6.png",
    tag: ["vintage", "electric"],
  },
];

const NewUser = () => {
  const [result, setResult] = useState("");
  return (
    <>
      <div className="search-bar">
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
        <input
          type="search"
          className="search"
          placeholder="Search users"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div className="container">
        <Card
          data={users.filter((item) =>
            item.name.toLowerCase().includes(result.toLowerCase())
          )}
        />
      </div>
    </>
  );
};

export default NewUser;
