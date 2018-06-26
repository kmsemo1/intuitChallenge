// ========== HTML STYING JS ==========
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("addIcon");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//  Get the cancelbtn that closes the modal
var cancelbtn = document.getElementsByClassName("cancelbtn")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
cancelbtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Hover img change for add reciept 
function hover(element) {
    element.setAttribute('src', './images/addHover.png');
}

function unhover(element) {
    element.setAttribute('src', './images/addBtn.png');
}


//   Hover img for editIcon
function hoverEdit(element) {
    element.setAttribute('src', './images/editHover.png');
}

function unhoverEdit(element) {
    element.setAttribute('src', './images/edit.png');
}

//   When cancelbtn is hovered then change styling of submit1 and cancelbtn
$(function () {
    $('.cancelbtn').hover(function () {
        $('.submit1').css('background-color', 'white');
    }, function () {
        $('.submit1').css('background-color', 'black');
    });
});

$(function () {
    $('.cancelbtn').hover(function () {
        $('.submit1').css('color', 'black');
    }, function () {
        $('.submit1').css('color', 'white');
    });
});

$(function () {
    $('.cancelbtn').hover(function () {
        $('.cancelbtn').css('background-color', 'black');
    }, function () {
        $('.cancelbtn').css('background-color', 'white');
    });
});

$(function () {
    $('.cancelbtn').hover(function () {
        $('.cancelbtn').css('color', 'white');
    }, function () {
        $('.cancelbtn').css('color', 'black');
    });
});


//   When submit1 is hovered then change styling of submit1 and cancelbtn
$(function () {
    $('.submit1').hover(function () {
        $('.cancelbtn').css('background-color', 'black');
    }, function () {
        $('.cancelbtn').css('background-color', 'white');
    });
});

$(function () {
    $('.submit1').hover(function () {
        $('.cancelbtn').css('color', 'white');
    }, function () {
        $('.cancelbtn').css('color', 'black');
    });
});

$(function () {
    $('.submit1').hover(function () {
        $('.submit1').css('background-color', 'white');
    }, function () {
        $('.submit1').css('background-color', 'black');
    });
});

$(function () {
    $('.submit1').hover(function () {
        $('.submit1').css('color', 'black');
    }, function () {
        $('.submit1').css('color', 'white');
    });
});


// Show edit column when editIcon is clicked
$(function () {
    $('#editIcon').click(function () {
        $('.editColumn').toggle();
    });
});

