const itemsPerPage = 10

function showPage(pageNumber, studentList) {
    // first hide all students on the page
  $(studentList).hide()

  // Then loop through all students in our student list argument
  let from = ((pageNumber - 1) * itemsPerPage) + 1;
  let to = pageNumber * itemsPerPage;
  for (let i = 0; i <= studentList.length; i++){

     // if student should be on this page number
     if ((i + 1) >= from && (i + 1) <= to){

        // show the student
        $(studentList[i]).show()
      }
   };
 }

function appendPageLinks(studentList) {

    // determine how many pages for this student list
    let pageLinkCount = Math.ceil(studentList.length/itemsPerPage);

    // create a page link section
    let pageLinkHTML = `<ul class="pagination">`;

    // “for” every page
    for (let i = 1; i <= pageLinkCount; i++){

        // add a page link to the page link section
        pageLinkHTML += `<li><a>${i}</a></li>`;
    }

    // close the ul
    pageLinkHTML += `</ul>`;

    // remove the old page link section from the site
    $(".pagination").remove();

    // append our new page link section to the site
    $(".page").append(pageLinkHTML);

    // define what happens when you click a link
    let $pageLinks = $(".pagination a");
    for (let i = 0; i <= $pageLinks.length; i++) {
      $($pageLinks[i]).on("click", function() {

        // Use the showPage function to display the page for the link clicked
        showPage(i+1, studentList);
        removeActiveClass();

        // mark that link as “active”
        $($pageLinks[i]).addClass("active");
    })
  }
}

function removeActiveClass(){
  let $pageLinks = $(".pagination a");
  for (let i = 0; i <= $pageLinks.length; i++) {
    $($pageLinks[i]).removeClass("active");
  }
}

function initializePage() {
  appendPageLinks($(".student-list").children());
  showPage(1, $(".student-list").children());
  $(".pagination a").first().addClass("active");
}
initializePage();

function searchList() {

    // Obtain the value of the search input
    let searchText = $('.page-header .student-search input').val();
    if ($.trim(searchText) === "") {
      initializePage();
      return
    }

    // remove the previous page link section
    let $pageLinks = $(".pagination").hide();
    $(".student-list").children().hide();

    // Loop over the student list, and for each student…
    let matchedStudents = []
    var listOfStudents = $(".student-list").children()
    for (let i=0; i<listOfStudents.length; i++){

      // ...obtain the student’s name…
      let currentStudent = listOfStudents[i];
      let studentName = $(currentStudent).find("h3").html();

      // ...and the student’s email…
      let studentEmail = $(currentStudent).find('.email').html();

      // ...if the search value is found inside either email or name…
      if (contains(studentName, searchText) || contains(studentEmail, searchText)){

        // ...add this student to list of “matched” student
        matchedStudents.push(currentStudent);
      }
    }

    // If there’s no “matched” students…
    if (matchedStudents.length === 0){

      // ...display a “no student’s found” message
      $(".student-list").append('<div class="student-item">No Students Found</div>')
    }

    // Call showPage to show first ten students of matched list
    showPage(1, matchedStudents);

    if (matchedStudents.length > itemsPerPage){
      // If over ten students were found…
      // ...call appendPageLinks with the matched students
      appendPageLinks(matchedStudents);
      $(".pagination a").first().addClass("active");
    }
}


$('.page-header .student-search button').on("click", searchList);

function contains(searchableObj, query){
  if (searchableObj) {
    return searchableObj.toLowerCase().indexOf(query.toLowerCase()) > -1
  }
}
