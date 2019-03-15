import React from "react";
import PropTypes from "prop-types";

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  
  return (
    <div className="container justify-content-center">
    <div className="board-head">
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
       <h6>Reset</h6>
      </button>
      <div className="timer">{time}</div>
    </div></div>
  );
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default BoardHead;