import React from "react"
import DatePicker from "react-datepicker"
import "./form.less"
import "react-datepicker/dist/react-datepicker.css"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { task: "", date: new Date(), due: '', }
  }

  handleSubmit = e => {
    const fields = {
      fields: { Priority: 3, Task: this.state.task, Due: "2019-09-27" },
    }

    fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_APP_ID}/List/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then(() => console.log("Form Sent!"))
      .catch(err => alert("Big Error! ", err))
    e.preventDefault()
  }

  handleChange = e => {
    if (e.target.name) {
      this.setState({ task: e.target.value })
    }
  }

  handleDate = date => {
    let dateString = date.toISOString().substring(0, 10);
    this.setState({ date: date, due: dateString });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Task</label>
        <input type="text" name="task" onChange={this.handleChange} />

        <label>Due Date</label>
        <DatePicker
          selected={this.state.due}
          onChange={this.handleDate}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
