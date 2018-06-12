//take list of HTML students 
//calculate # of students in the list, give each a number and save as const
//calculate # of pages based on number of students in the list and save as a const
//grab each li item with studetnt-info compare its numerical const and if < 9 page = page 1
//if the numerical const is >10<20 = pg2 ...etc
//print to page
//display buttons number  based on the const pages

//show page function~~ builds a list of 10 students and displays on page.  



const students = $(".student-list");
    $('.student-item').hide();
   // console.log(students);
const studentsPerPage = 10;
const numberOfPages = Math.ceil(students.length / studentsPerPage);
const page = $('.page');
console.log(page);

for (let i = 0; i < students.length; i++) {
 
    const chunk = $(".student-item").slice( i );
    (chunk).show();
    console.log(chunk);
}  
 
//paginiation function



// const students = $(".student-item");
//     $('.student-item').hide();
//     console.log(students);
// const studentsPerPage = 10;
// 
// 
// console.log(numberOfPages);

// function arrayChunker(students) {
// //function pageNumber(students * 10 + 1) {}
// for (let i = 0; i <= 10 || students.length; i ++) { 
//     const chunk = $(".student-item").slice( i );
        
//     (chunk).show();
//     console.log(chunk);
// }  



// //console.log(students);

// }
// //arrayChunker (students);



// const students = $(".student-item");
//     $('.student-item').hide();
//     console.log(students);
//  const numberOfPages = Math.ceil(students.length / studentsPerPage);
//     console.log('# of pages:' + numberOfPages);

// for (let i = 0; i < students.length; i++) {  
//     const chunk = $(".student-item").slice( i - 10);
//     (chunk).show();
//     console.log(chunk);
// } 
 //}
 //for (let i = 0; i < students.list; i++) {
 //}

// perPage = 10;
// const pages = Math.ceil(numbStudents / limitPerPage);

// function Paginator(items, page, per_page) {
 
//     var page = page || 1,
//     per_page = per_page || 10,
//     offset = (page - 1) * per_page,
   
//     paginatedItems = items.slice(offset).slice(0, per_page),
//     total_pages = Math.ceil(items.length / per_page);
//     return {
//     page: page,
//     per_page: per_page,
//     pre_page: page - 1 ? page - 1 : null,
//     next_page: (total_pages > page) ? page + 1 : null,
//     total: items.length,
//     total_pages: total_pages,
//     data: paginatedItems
//     };
//   }

// const hideList = (students) => {
// for (let i = 0; i < students.length; i++) {
//     //go through the student-list with i
//     $('.student-list').hide();
//     console.log(i);
//     if (i < 10) {
//                 //display on page 1
//                 $('.student-item').show();
//                 alert(i);
//             } else {
//                 //hide
//                 $('.student-item').hide();
//             }
//         }

// }

//$(".student-list .student-item:gt(' limitPerPage ')").hide();

//$('.student-list').on("showPage", function(/* arguments for page number and student list */) {
// for (i = 0; i < $('.student-list').length; i++) {
//     //go through the student-list with i
    
//     if (i < 10) {
//         //display on page 1
//         $('.student-item').show();
//         alert(i);
//     } else {
//         //hide
//         $('.student-item').hide();
//     }
// }
//});

//  
//     // first hide all students on the page
//     //$('.student-list').hide();
//     console.log();
//     // then loop through all students in our student list argument
//     for (i = 0; i < student-list.length; i++) {
 
//     }
//     // if student should be on this page number
//     // show the student
    
//     });



//     function appendPageLinks(/* take a student list as an argument */) {
//         // determine how many pages for this student list
//         // create a page link section
//         // "for" every page
//         // add a page link to the page link section
//         // remove the old page link section from the site
//         // append our new page link section to the site
//         // define what happens when you click a link (event listener)
//         // Use showPage to display the page for the link clicked
//         // mark that link as "active"
        
//         }