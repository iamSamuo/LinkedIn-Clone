import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__articles">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2> LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React Mastering is back","Top--- news 9999 readers" )}
      {newsArticle("Corona Virus Kenya","Top--- news 12,300 readers" )}
      {newsArticle("Data Science is becoming an owesome art","Top--- news 100 readers" )}
      {newsArticle("What do Software Engineers Really Do?","Top--- news 2000 readers" )}
    </div>
  );
}

export default Widgets;
