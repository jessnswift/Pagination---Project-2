const itemsPerPage = 10

function showPage(pageNumber, studentList) {
    // first hide all students on the page
    let list = studentList.children()
    list.hide()

    // Then loop through all students in our student list argument
    let from = ((pageNumber - 1) * itemsPerPage) + 1;
    let to = pageNumber * itemsPerPage;
    for (i=0; i<=list.length; i++){

       // if student should be on this page number
       if (i>=from && i<=to){

        // show the student
        $(list[i]).show()

     }
   };
 }

let studentUl = $('.student-list');
showPage(5, studentUl)
