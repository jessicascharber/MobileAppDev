// javaScript for setting local storage and session storage

var fnameForm = document.getElementById('fname');
var lnameForm = document.getElementById('lname');
var phoneForm = document.getElementById('phone');
var emailForm = document.getElementById('email');
var messageForm = document.getElementById('message');
var selectForm = document.getElementById('select-choice-mini');

 if(!localStorage.getItem('fname')) {
populateStorage();
 } else {
 setStyles();
 }

function populateStorage() {
  localStorage.setItem('fname', document.getElementById('fname').value);
  localStorage.setItem('lname', document.getElementById('lname').value);
  localStorage.setItem('phone', document.getElementById('phone').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('message', document.getElementById('message').value);
  localStorage.setItem('select-choice-mini', document.getElementById('select-choice-mini').value);

  setStyles();
}

function setStyles() {
  var currentfname = localStorage.getItem('fname');
  var currentlname = localStorage.getItem('lname');
  var currentphone = localStorage.getItem('phone');
  var currentemail = localStorage.getItem('email');
  var currentmessage = localStorage.getItem('message');
  var currentselect = localStorage.getItem('select-choice-mini');

  document.getElementById('fname').value = currentfname;
  document.getElementById('lname').value = currentlname;
  document.getElementById('phone').value = currentphone;
  document.getElementById('email').value = currentemail;
  document.getElementById('message').value = currentmessage;
  document.getElementById('select-choice-mini').value = currentselect;

//  htmlElem.style.backgroundColor = '#' + currentColor;
//  pElem.style.fontFamily = currentFont;
//  imgElem.setAttribute('src', currentImage);
}

fnameForm.onchange = populateStorage;
lnameForm.onchange = populateStorage;
phoneForm.onchange = populateStorage;
emailForm.onchange = populateStorage;
messageForm.onchange = populateStorage;
selectForm.onchange = populateStorage;

// Get the text field that we're going to track
//let field = document.getElementById("field");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let message = document.getElementById("message");
let select-choice-mini = document.getElementById("select-choice-mini");
// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
//  field.value = sessionStorage.getItem("autosave");
  fname.value = sessionStorage.getItem("autosave");
  lname.value = sessionStorage.getItem("autosave");
  phone.value = sessionStorage.getItem("autosave");
  email.value = sessionStorage.getItem("autosave");
  message.value = sessionStorage.getItem("autosave");
  select-choice-mini.value = sessionStorage.getItem("autosave");
}
// Listen for changes in the text field
// field.addEventListener("change", function() {
  // And save the results into the session storage object
//  sessionStorage.setItem("autosave", field.value);
fname.addEventListener("change", function() {
    // And save the results into the session storage object
    sessionStorage.setItem("autosave", fname.value);
lname.addEventListener("change", function() {
      // And save the results into the session storage object
    sessionStorage.setItem("autosave", lname.value);
phone.addEventListener("change", function() {
        // And save the results into the session storage object
    sessionStorage.setItem("autosave", phone.value);
email.addEventListener("change", function() {
          // And save the results into the session storage object
    sessionStorage.setItem("autosave", email.value);
message.addEventListener("change", function() {
            // And save the results into the session storage object
    sessionStorage.setItem("autosave", message.value);
select-choice-mini.addEventListener("change", function() {
                        // And save the results into the session storage object
    sessionStorage.setItem("autosave", select-choice-mini.value);
});

// $.mobile.page.prototype.options.domCache = true;
$( "#mypanel" ).trigger( "updatelayout" );



@media ( min-width: 35em ) {

	/* wrap on wide viewports once open */

	.ui-panel-page-content-open.ui-panel-page-content-position-left {
		margin-right: 17em;
	}
	.ui-panel-page-content-open.ui-panel-page-content-position-right {
		margin-left: 17em;
	}
	.ui-panel-page-content-open {
		width: auto;
	}

	/* disable "dismiss" on wide viewports */
	.ui-panel-dismiss {
		display: none;
	}

	/* same as the above but for panels with display mode "push" only */

	.ui-panel-page-content-open.ui-panel-page-content-position-left.ui-panel-page-content-display-push {
		margin-right: 17em;
	}
	.ui-panel-page-content-open.ui-panel-page-content-position-right.ui-panel-page-content-display-push {
		margin-left: 17em;
	}
	.ui-panel-page-content-open.ui-panel-page-content-display-push {
		width: auto;
	}

	.ui-panel-dismiss-display-push {
		display: none;
	}
}

/*   
*/
  //document.getElementById("demo").innerHTML = txt;

  //console.log(txt);
