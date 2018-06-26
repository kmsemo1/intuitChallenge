$(document).ready(function () {
  // Getting jQuery references to the post debtor, item, price, form, and creditor select
  var debtorInput = $("#debtor");
  var itemInput = $("#item");
  var priceInput = $("#price");
  var creditorInput = $("#creditor");
  var modalForm = $(".modal-content");

  // Adding an event listener for when the form is submitted
  $(modalForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var creditorId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
  // Otherwise if we have an creditor_id in our url, preset the creditor select box to be our creditor
  else if (url.indexOf("?creditor_id=") !== -1) {
    creditorId = url.split("=")[1];
  }

  // Getting the creditors, and their posts
  getCreditors();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing  debtor, item, price, form, and creditor
    if (!debtorInput.val().trim() || !itemInput.val().trim() || !priceInput.val().trim() || !creditorInput.val()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
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
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    }
    else {
      submitPost(newPost);
    }
  }

  // Submits a new post and brings user to  page upon completion
  function submitPost(post) {
    $.post("/api/creditors", post, function () {
      window.location.reload();
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an creditor's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
      case "creditor":
        queryUrl = "/api/creditors/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data.CreditorId || data.id)
        // If this post exists, prefill our cms forms with its data
        priceInput.val(data.price);
        debtorInput.val(data.debtor);
        itemInput.val(data.item);
        creditorId = data.CreditorId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get creditors and then render our list of creditors
  function getCreditors() {
    $.get("/api/creditors", renderCreditorList);
  }
  // Function to either render a list of creditors, or if there are none, direct the user to the page
  // to create an creditor first
  function renderCreditorList(data) {
    if (!data.length) {
      window.location.reload();
    }
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCreditorRow(data[i]));
    }
    creditorInput.empty();
    console.log(rowsToAdd);
    console.log(creditorInput);
    creditorInput.append(rowsToAdd);
    creditorInput.val(creditorId);
  }

  // // Creates the creditor options in the dropdown
  // function createCreditorRow(creditor) {
  //   var listOption = $("<option>");
  //   listOption.attr("value", creditor.id);
  //   listOption.text(creditor.name);
  //   return listOption;
  // }

  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/posts",
      data: post
    })
      .then(function () {
        window.location.reload();
      });
  }
});
