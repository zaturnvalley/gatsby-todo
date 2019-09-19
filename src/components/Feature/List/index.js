import React from "react";
// import Airtable from 'airtable';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import "./list.less";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] }
  }
  getInfo() {
    fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_APP_ID}/List/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
        let newTasks = this.state.tasks;
        for (let record in data.records) {
          let taskName = data.records[record].fields.Task;
          let date = data.records[record].fields.Due, year = date.substring(0, 4), month = date.substring(5, 7),
            day = date.substring(8, 10), formatedDate = new Date(year, month, day);
          let dueName = formatedDate.toString().substring(0, 15);
          newTasks.push(`${taskName} - Due: ${dueName}`);
        }
        this.setState({ tasks: newTasks });
      });
  }
  componentDidMount() {
    this.getInfo();
  }

  renderItems(tasks) {
    return (
      (tasks || []).map(item =>
        <div className="item" key={item}>{item}<button>X</button></div>
      )
    );
  }
  render() {
    const { tasks } = this.state;
    return (
      <div id="list" >
        {this.renderItems(tasks)}
        <button type="button" class="update" onClick={this.getInfo}>Update?</button>
      </div>

    );
  }
}
