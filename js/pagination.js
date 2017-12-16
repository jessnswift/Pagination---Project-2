const itemsPerPage = 10

function showPage(pageNumber, studentList) {
    // first hide all students on the page
    let list = studentList.children()
    list.hide()

    // Then loop through all students in our student list argument
    let from = ((pageNumber - 1) * itemsPerPage) + 1;
    let to = pageNumber * itemsPerPage;
    for (let i=0; i<=list.length; i++){
      console.log(i);

       // if student should be on this page number
       if (i>=from && i<=to){

        // show the student
        $(list[i]).show()

     }
   };
 }


function appendPageLinks(studentList) {
  let list = studentList.children()

    // determine how many pages for this student list
    let pageLinkCount = Math.ceil(list.length/itemsPerPage);

    // create a page link section
    let pageLinkHTML = `<ul class="pagination">`;

    // “for” every page
    for (let i=1; i<=pageLinkCount; i++){

        // add a page link to the page link section
        pageLinkHTML += `<li><a>${i}</a></li>`
      }

        // close the ul
        pageLinkHTML += `</ul>`

    // remove the old page link section from the site
    $(".pagination").remove();

    // append our new page link section to the site
    $(".page").append(pageLinkHTML);

    // define what happens when you click a link
    let $pageLinks = $(".pagination a");
    for (let i=0; i<=$pageLinks.length; i++) {
      $($pageLinks[i]).on("click", function() {

        // Use the showPage function to display the page for the link clicked
        showPage(i+1, studentList)
        removeActiveClass();

        // mark that link as “active”
        $($pageLinks[i]).addClass("active");
    })
  }
}

function removeActiveClass(){
  let $pageLinks = $(".pagination a");
  for (let i=0; i<=$pageLinks.length; i++) {
    $($pageLinks[i]).removeClass("active");
  }
}

appendPageLinks($(".student-list"));
showPage(1, $(".student-list"));
$(".pagination a").first().addClass("active");
