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

function addRow() {
    "use strict";
 
     var table = document.getElementById("table");
     
     var row= document.createElement("tr");
     console.log(row);
     var td1 = document.createElement("td");
     var td2 = document.createElement("td");
     var td3 = document.createElement("td");    
 
     td1.innerHTML = document.getElementById("recipient").value;
     td2.innerHTML  = document.getElementById("item").value;
     td3.innerHTML  = document.getElementById("price").value;
 
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
 
     table.children[0].appendChild(row);
};

