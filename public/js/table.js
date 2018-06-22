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
