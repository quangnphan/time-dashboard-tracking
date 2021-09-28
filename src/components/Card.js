import React from "react";
import ellipsis from "../images/icon-ellipsis.svg"

const Card = ({title,timeframes,tab}) => {
  return (
    <div id={title.replace(/ /g, '')} className="card">
        <div className="contentWrapper">
            <div className="header">
                <h2>{title}</h2>
                <img src={ellipsis} alt="ellipsis"></img>
            </div>
            <div className="timeframe">
                <div className="current">{timeframes[tab].current}hrs</div>
                <div className="previous">Last Week - {timeframes[tab].previous}hrs</div>
            </div>
        </div>
    </div>
  );
};

export default Card;
