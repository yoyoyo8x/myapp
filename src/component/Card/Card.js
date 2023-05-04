import React from "react";
import "./Card.css";

const Card = (props) => {
  const { data } = { ...props };
  return data.map((item) => (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          <img src={item.img} alt="" />
        </div>
        <ul>
          <div className="info">
            <h4>{item.name}</h4>
            <p>{item.place}</p>
          </div>
          <div className="tag-box">
            {item.tag.map((type) => {
              return <div className="tag">{type}</div>;
            })}{" "}
          </div>
        </ul>
      </div>
    </div>
  ));
};

export default Card;
