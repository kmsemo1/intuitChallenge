// ========== TABLE JS ==========
// ARRAY FOR TABLE EDIT OPTIONS
var editOption = ["Edit", "Save", "Cancel", "Delete"];

// ------dynamic table function
function createTable() {

    // Object for table data
    var Transaction = [
        {
            "Select": editOption,
            "Creditor": "Kanye West",
            "Debtor": "Taylor Swift",
            "Item": "Pancakes",
            "Price": "12.50"
        },
        {
            "Select": editOption,
            "Creditor": "Megan Markle",
            "Debtor": "Kanye West",
            "Item": "Salad",
            "Price": "5.00"
        },
        {
            "Select": editOption,
            "Creditor": "Taylor Swift",
            "Debtor": "Megan Markle",
            "Item": "Tea",
            "Price": "30.30"
        }
    ];

    // EXTRACT VALUE FOR HTML HEADER. 
    var col = [];
    for (var i = 0; i < Transaction.length; i++) {
        for (var key in Transaction[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);  
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < Transaction.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = Transaction[i][col[j]];
        }
    }



    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

// // ========== TABLE JS ==========
// dynamic table function
// var editOption = ["Edit", "Save", "Cancel", "Delete"];

// function createTable() {
//     var myTableDiv = document.getElementById("metric_results")
//             var table = document.createElement('TABLE')
//             var tableBody = document.createElement('TBODY')

//             table.appendChild(tableBody);

//             var heading = new Array();
//             heading[0] = "Select"
//             heading[1] = "Creditor"
//             heading[2] = "Debitor"
//             heading[3] = "Item"
//             heading[4] = "Total Amount"

//             // EDIT OBJECT
            
//             var transaction = new Array()
//             transaction[0] = new Array(editOption, "Kanye West", "Taylor Swift", "Pancakes", "12.50")
//             transaction[1] = new Array(editOption, "Megan Markele", "Kanye West", "Salad", "5.00")
//             transaction[2] = new Array(editOption, "Taylor Swift", "Megan Markele", "Tea", "30.30")


//             //TABLE COLUMNS
//             var tr = document.createElement('tr');
//             tableBody.appendChild(tr);
//             for (i = 0; i < heading.length; i++) {
//                 var th = document.createElement('th')
//                 th.width = '75';
//                 th.appendChild(document.createTextNode(heading[i]));
//                 tr.appendChild(th);
//             }

//             //TABLE ROWS
//             for (i = 0; i < stock.length; i++) {
//                 var tr = document.createElement('tr');
//                 for (j = 0; j < stock[i].length; j++) {
//                     var td = document.createElement('td')
//                     td.appendChild(document.createTextNode(stock[i][j]));
//                     tr.appendChild(td)
//                 }
//                 tableBody.appendChild(tr);
//             }
//             myTableDiv.appendChild(table)

//         };


function addClassTable() {
    createTable();
    // adding classes in the table
    $("th:first").addClass("editColumn");
    $("td:first-child").addClass("editColumn");
    $("td:first-child").addClass("editBtn");

}
// load JSON as soon as page is loaded
window.onload = addClassTable;


// Show edit column when editIcon is clicked
$(function () {
    $('#editIcon').click(function () {
        $('.editColumn').toggle();
    });
});
