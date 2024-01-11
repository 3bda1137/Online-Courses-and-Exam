//get data
import { course_names } from "./exportfunc.js";

var localStorageCourses = course_names();

let coursesContainer = document.getElementById("course-id");
let courses = [];
for (let i = 0; i < localStorageCourses.length; i++) {
  let courseTemplate = ` 
        <div class="card-flex-basis d-flex">
                        <a href="courseOveview.html?courseId=${localStorageCourses[i].id
    }" class="custom-card row ">
                            <div class="card p-0 shadow ">                                
                            <img src="images/logo.png" class="card-img-top card-image w-100" alt="...">
                                <div class="card-body ">
                                    <h3 class="card-title text-center">${localStorageCourses[i].course_Name
    }</h3>
                                    <p class="text-center">${localStorageCourses[i].course_Description
    }</p>
                                    <div class="social text-center p-3 ">
                                  
                                      <a href="#"><i class="fa-solid fa-heart" style="color: #742323" id="${localStorageCourses[i].id
    }"></i></a>
                                      <strong class="text-center text-danger"> price: ${localStorageCourses[i].course_Price == 0
      ? "free"
      : localStorageCourses[i].course_Price
    }</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    `;
  courses.push(courseTemplate);
}
for (let i = 0; i < courses.length; i++) {
  coursesContainer.innerHTML += courses[i];
}

var userSearch = document.getElementById("user-search");
userSearch.addEventListener("keyup", function searchFunction() {
  let searchItems = [];
  for (let i = 0; i < localStorageCourses.length; i++) {
    if (
      localStorageCourses[i].course_Name
        .toUpperCase()
        .includes(userSearch.value.toUpperCase())
    ) {
      let item = ` 
        <div class="card-flex-basis d-flex">
                        <a href="studentCourse.html?courseId=${localStorageCourses[i].id
        }" class="custom-card row ">
                            <div class="card p-0 shadow ">
                                <img src="images/logo.png" class="card-img-top card-image w-100" alt="...">
                                <div class="card-body ">
                                    <h3 class="card-title text-center">${localStorageCourses[i].course_Name
        }</h3>
                                    <p class="text-center">${localStorageCourses[i].course_Description
        }</p>
                                    <div class="social text-center p-3 ">
                                      <a href="#"><i class="fa-solid fa-heart" style="color: #742323" id="${localStorageCourses[i].id
        }"></i></a>
                                      <strong class="text-center text-danger"> price: ${localStorageCourses[i].course_Price == 0
          ? "free"
          : localStorageCourses[i].course_Price
        }</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    `;

      searchItems.push(item);
    }
    coursesContainer.innerHTML = "";
    for (let i = 0; i < searchItems.length; i++) {
      // console.log(searchItems[i]);
      coursesContainer.innerHTML += searchItems[i];
    }
  }
});

let checkprice = document.querySelectorAll("input[type='checkbox']");

for (let i = 0; i < checkprice.length; i++) {
  checkprice[i].addEventListener("change", function (e) {
    let searchItems = [];
    if (e.target.checked) {
      // console.log(e.target.checked)
      // console.log((Number(e.target.getAttribute("data-price"))))
      for (let i = 0; i < localStorageCourses.length; i++) {
        // data-SPrice="0" data-Lprice="100"
        if (
          localStorageCourses[i].course_Price >=
          Number(e.target.getAttribute("data-SPrice")) &&
          localStorageCourses[i].course_Price <=
          Number(e.target.getAttribute("data-Lprice"))
        ) {
          let item = ` 
                      <div class="card-flex-basis d-flex">
                        <a href="studentCourse.html?courseId=${localStorageCourses[i].id
            }" class="custom-card row ">
                            <div class="card p-0 shadow ">
                                <img src="images/logo.png" class="card-img-top card-image w-100" alt="...">
                                <div class="card-body ">
                                    <h3 class="card-title text-center">${localStorageCourses[i].course_Name
            }</h3>
                                    <p class="text-center">${localStorageCourses[i].course_Description
            }</p>
                                    <div class="social text-center p-3 ">
                                      <a href="#"><i class="fa-solid fa-heart" style="color:#742323" id="${localStorageCourses[i].id
            }" ></i></a>
                                      <strong class="text-center text-danger"> price: ${localStorageCourses[i].course_Price == 0
              ? "free"
              : localStorageCourses[i].course_Price
            }</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    `;

          searchItems.push(item);
        }
        coursesContainer.innerHTML = "";
        for (let i = 0; i < searchItems.length; i++) {
          coursesContainer.innerHTML += searchItems[i];
        }
      }
    } else {
      for (let i = 0; i < localStorageCourses.length; i++) {
        let item = ` 
        <div class="card-flex-basis d-flex">
                        <a href="studentCourse.html?courseId=${localStorageCourses[i].id
          }" class="custom-card row ">
                            <div class="card p-0 shadow ">
                                <img src="images/logo.png" class="card-img-top card-image w-100" alt="...">
                                <div class="card-body ">
                                    <h3 class="card-title text-center">${localStorageCourses[i].course_Name
          }</h3>
                                    <p class="text-center">${localStorageCourses[i].course_Description
          }</p>
                                    <div class="social text-center p-3 ">
                                      <a href="#" ><i class="fa-solid fa-heart" style="color:#742323" id="${localStorageCourses[i].id
          }"></i></a>
                                      <strong class="text-center text-danger"> price: ${localStorageCourses[i].course_Price == 0
            ? "free"
            : localStorageCourses[i].course_Price
          }</strong>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    `;
        if (!searchItems.includes(item)) {
          searchItems.push(item);
        }
        coursesContainer.innerHTML = "";
        for (let i = 0; i < searchItems.length; i++) {
          coursesContainer.innerHTML += searchItems[i];
        }
      }
    }
  });
}


var favCourses = [];

let addTofav = document.getElementsByClassName("fa-heart");
console.log(addTofav);
for (let i = 0; i < addTofav.length; i++) {

  addTofav[i].addEventListener("click", function (e) {
    if (localStorage.getItem("favCourses") != null) {
      let dataFromLocalStorge = localStorage.getItem("favCourses");
      if (dataFromLocalStorge != []) {
        favCourses = JSON.parse(dataFromLocalStorge);
      }
    }
    if (!favCourses.includes(e.target.id)) {
      favCourses.push(e.target.id);
    }
    localStorage.setItem("favCourses", JSON.stringify(favCourses));
  });

  // console.log(localStorageCourses[e.target.id])
}