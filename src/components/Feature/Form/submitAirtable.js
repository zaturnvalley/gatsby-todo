// require("dotenv").load()

const Airtable = require("airtable")

export default function(e) {
  const fields = { fields: { Task: this.state.task } }

  fetch(`https://api.airtable.com/v0/${process.env.APP_ID}/List/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fields),
  })
  .then(() => alert("Form Sent!"))
  .catch(err => alert('Big Error! ', err));
  e.preventDefault();

  // const base = new Airtable({ apiKey: `${process.env.AIRTABLE_API_KEY}` }).base(
  //   process.env.APP_ID
  // )
  // base("List").create(
  //   [
  //     {
  //       fields: {
  //         Priority: 2,
  //         "To Do": "stuff",
  //         Due: "2019-09-30",
  //       },
  //     },
  //   ],
  //   function(err, records) {
  //     if (err) {
  //       console.log("Error: ", err)
  //       return
  //     }
  //     records.forEach(function(record) {
  //       console.log(record.getId())
  //     })
  //   }
  // fetch(`https://api.airtable.com/v0/${process.env.APP_ID}/favorites?api_key=YOUR_API_KEY`)
}

// export async function submitAirtable(data) {
//   const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
//     process.env.AIRTABLE_APP_ID
//   )

//   base("List").create([{ fields: {} }, { fields: {} }], function(
//     err,
//     records
//   ) {
//     if (err) {
//       console.log('There was an error: ', err);
//       return;
//     }
//     records.forEach(function (record){
//       console.log(record.getId());
//     });
//   });
// }

// class AirtableConnect {
//   constructor() {
//     this.base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
//       process.env.AIRTABLE_APP_ID
//     )
//   }

//   async postData()
// }
