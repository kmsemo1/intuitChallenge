$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    var creditorInput = $("#creditor");
    var receiptList = $("tbody");
    var receiptContainer = $("#showData");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", ".modal-content", handleReceiptFormSubmit);

    $(document).on("click", ".delete-author", handleDeleteButtonPress);

    // Getting the intiial list of Authors
    getCreditors();

    // A function to handle what happens when the form is submitted to create a new Author
    function handleReceiptFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!creditorInput.val().trim().trim()) {
            return;
        }
        // Calling the upsertCreditor function and passing in the value of the name input
        upsertCreditor({
            CreditorId: creditorInput
                .val()
                .trim(),
            debtor: debtorInput
                .val()
                .trim(),
            item: itemInput
                .val()
                .trim(),
            price: priceInput
                .val()
                .trim()
        });
    }

    // A function for creating an author. Calls getCreditors upon completion
    function upsertCreditor(receiptData) {
        $.post("/api/creditors", receiptData)
            .then(getCreditors);
    }

    // Function for creating a new list row for authors
    function createReceiptRow(receiptData) {
        console.log(receiptData);
        // create edit column for every tr created
        var newTr = $("<tr>");
        newTr.data("creditor", receiptData);
        newTr.append("<td>" + receiptData.creditor + "</td>");
        newTr.append("<td>" + receiptData.debtor + "</td>");
        newTr.append("<td>" + receiptData.item + "</td>");
        newTr.append("<td>" + receiptData.price + "</td>");
        newTr.append("<td> <span>Edit</span> <span>Delete</span> </td>");
        return newTr;
    }

    
   

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getCreditors() {
        $.get("/api/creditors", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createReceiptRow(data[i]));
            }
            renderCreditorList(rowsToAdd);
            creditorInput.val("");
        });
    }

    // A function for rendering the list of authors to the page
    function renderCreditorList(rows) {
        receiptList.children().not(":last").remove();
        receiptContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            creditorList.prepend(rows);
        }
        // else {
        //     renderEmpty();
        // }
    }

    // Function for handling what to render when there are no authors
    // function renderEmpty() {
    //     var alertDiv = $("<div>");
    //     alertDiv.addClass("alert alert-danger");
    //     alertDiv.text("You must create an Author before you can create a Post.");
    //     receiptContainer.append(alertDiv);
    // }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("creditor");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/creditors/" + id
        })
            .then(getCreditors);
    }
});
