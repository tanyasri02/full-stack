//console.log("conected");
// var tabledata = [
//     { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
//     { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
//     { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
//     { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
//     { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
// ];
var table = new Tabulator("#example-table", {
    height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    //set the table data
    layout: "fitColumns", //fit columns to width of table (optional)
    columns: [ //Define Table Columns
        { title: "Name", field: "name", width: 250 },
        { title: "Age", field: "age", width: 250 },
        { title: "Favourite Color", field: "col", field: "col" },
        { title: "Date Of Birth", field: "dob", width: 250 },
    ],

    rowClick: function(e, row) { //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");

    },

});
var gid = ["ta", "na", "pr", "sd", "sde"];
let k = 4;
for (let i = 0; i < 4; i++) {

    k = k - 1;
    table.addData([{ id: i, name: k, age: "16", col: "yellow", dob: "31/01/1999" }, ], true);
}