//show page function~~ builds a list of 10 students and displays on page.  


const numbStudents = $('.student-list .student-item').length;
const limitPerPage = 10;
const pages = Math.ceil(numbStudents / limitPerPage);


alert('numb of students' + numbStudents + ' ' + 'pages' + pages);
console.log('numb of students' + numbStudents + ' ' + 'pages' + pages);


const hideList = (list) => {
for (let i = 0; i < list.length; i++) {
    //go through the student-list with i
    $('.student-list').hide();
    console.log(i);
    if (i < 10) {
                //display on page 1
                $('.student-item').show();
                alert(i);
            } else {
                //hide
                $('.student-item').hide();
            }
        }

}



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