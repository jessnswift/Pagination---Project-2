function showPage (pageNumber, studentList) {
    console.log('it worked');
    studentList.hide();

const itemsPerPage = 10
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student
    var from = (pageNumber - 1) * Number(itemsPerPage) + 1;
    var to = (from + Number(itemsPerPage)) - 1;

    //for (let i=0; i<.student-list.length; i++){
    //  if(i==50){
    //    $(.student-list[i]).show();
  //      }
//    }
// }

showPage(1, $(".student-list").children());

const $studentList = $('.student-list')

function appendPageLinks(/* take a student list as an argument */) {
    console.log('it worked #2');
    // determine how many pages for this student list
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
      }

appendPageLinks();


function searchList() {
    // Obtain the value of the search input
    // remove the previous page link section
    // Loop over the student list, and for each student…
// ...obtain the student’s name…
// ...and the student’s email…
// ...if the search value is found inside either email or name…
    		// ...add this student to list of “matched” student
    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           // ...call appendPageLinks with the matched students
   // Call showPage to show first ten students of matched list
}
