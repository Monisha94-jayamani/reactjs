import React from "react";
import Card from "./Card";

const Tracker = ({ days, createTask, toggleTask, removetask, remove }) => (
  <div className="main-container">
    {days.map((day, index) => (
      <Card
        key={index}
        day={day}
        createTask={(value) => createTask(index, value)}
        toggleTask={(taskIndex) => toggleTask(index, taskIndex)}
        remove={(index) => {
          return remove(index);
        }}
        removetask={(taskIndex) => removetask(index, taskIndex)}
      />
    ))}
  </div>
);

export default Tracker;
