// ========= MODAL JS ==========


// SUBMIT btn check and submit
function submit() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        modal.style.display = "none";
        addRow();
    }
}

// function addRow() {
//     "use strict";

//      var table = document.getElementById("table");

//      var row= document.createElement("tr");
//      console.log(row);
//      var td1 = document.createElement("td");
//      var td2 = document.createElement("td");
//      var td3 = document.createElement("td");    

//      td1.innerHTML = document.getElementById("recipient").value;
//      td2.innerHTML  = document.getElementById("item").value;
//      td3.innerHTML  = document.getElementById("price").value;

//      row.appendChild(td1);
//      row.appendChild(td2);
//      row.appendChild(td3);

//      table.children[0].appendChild(row);
// };

// function AddData() {
//     var cell1 = document.getElementById("creditor").value;
//     var cell2 = document.getElementById("recipient").value;
//     var cell3 = document.getElementById("item").value;
//     var cell4 = document.getElementById("cost").value;

//     if ((cell1 == parseInt(cell1)) && (cell2 == parseInt(cell2) && (cell3 == parseInt(cell3) && (parseInt(cell4) != (cell4))) {
//         alert("Wrong Value Entered");
//     } else {
//         var rows = "";
//         var cell1 = document.getElementById("age").value;
//         var cell2 = $('input[name="gender"]').val();
//         var cell3 = document.getElementById("age").value;
//         var cell4 = document.getElementById("city").value;

//         rows += "<tr><td>" + cell1 + "</td><td>" + cell2 + "</td><td>" + cell3 + "</td><td>" + cell4 + "</td></tr>";
//         $(rows).appendTo("#list tbody");
//     }
// };

// function newRow() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(-1);
//     var cell1 = row.insertCell(1);
//     var cell2 = row.insertCell(2);
//     var cell3 = row.insertCell(3);
//     var cell4 = row.insertCell(4);


//     cell1.innerHTML = document.getElementById("creditor").value;;
//     cell2.innerHTML = document.getElementById("recipient").value;;
//     cell3.innerHTML = document.getElementById("item").value;;
//     cell4.innerHTML = document.getElementById("price").value;;
// }

// function submitForm() {
//     var x = document.getElementById("creditor").value;
//     document.getElementById("showData").innerHTML = x;
// }

$(document).ready(function () {
    $(".submit1").click(function () {
        var creditor = $("#creditor").val();
        var recipient = $("#recipient").val();
        var item = $("#item").val();
        var price = $("#price").val();

        var markup = "<tr><td>" + creditor + "</td><td>" + recipient + "</td></tr>" + "</td><td>" + item + "</td></tr>" + "</td><td>" + price + "</td></tr>";
        $("#showData").append(markup);
    })
});
