var emailOfCurrentUser = localStorage.getItem("currentUserEmail");
var currentUser = {};
var resultOfOldData = {};
function getCurrentUserFromLocalStorage() {
  var contOfStudents = Number(localStorage.getItem("contOfStudents"));
  var Students = localStorage.getItem("stuentData");
  if (Students != null) {
    resultOfOldData = JSON.parse(Students);
    for (var i = 0; i < contOfStudents; i++) {
      if (resultOfOldData[`student${i}`].email == emailOfCurrentUser) {
        currentUser = resultOfOldData[`student${i}`]
        i = contOfStudents;
      }
    }
  }
}
getCurrentUserFromLocalStorage();

function logout()
{
  localStorage.removeItem("currentUserEmail");
}

if (emailOfCurrentUser) {

  var element = document.getElementById("registerAndLogin");
  element.innerHTML = `<div class='pe-5'><a href='studentProfile.html'><i class="fa-regular fa-xl px-2 fa-circle-user"></i><span class='fs-4'> ${currentUser["name"]}</span></a>
  <a class="btn btn-outline-secondry login_btn mx-2"
    style="color: rgb(255, 255, 255); background-color: #9cadbc" onclick="logout()" href="login.html">
    Logout
  </a> </div>`;
  var prof = document.getElementById("prof");
  if (prof != null) {
    prof.innerHTML +=` <span class="text-info">${currentUser["name"]}</span>` ;
  
  }
}