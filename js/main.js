//create a paginator that takes an HTML list of students
//and displays 10 students per page with buttons to 
//access the students on other pages


//Access the class of student-item and save the array, named $students, and remove the students from the page
const $students = $(".student-item");
const $studentContainer = $(".student-list");

//selectStudent function passes the sliced array chunk (which carries 10 students info from the slice) and page number parameters
var selectStudents = function selectStudents(studentArray, pageNumber) {
    return studentArray.slice(pageNumber * 10 - 10, pageNumber * 10);
};

//showStudents function appends the studentElements to the student list "container"
var showStudents = function showStudents(studentArray, pageIndex) {
    //empty() removes the $studentContaier and all of its childNodes from page
    $studentContainer.empty();
    //using the studentArray and pageIndex parameters append into the $studentContainer
    $studentContainer.append(selectStudents(studentArray, pageIndex));
};

//math to calculate number of buttons/links needed
var buttonCount = function buttonCount(studentArray) {
    return Math.ceil(studentArray.length / 10);
};

//create the buttons and append to an array paginationButtons
var createButtons = function createButtons(buttonCount) {
    var paginationButtons = ["<ul class=pagination>"];
    //create an index to number the button
    var index = 1;
    //keep making buttons until there equals the return from the buttonCount function
    while (paginationButtons.length <= buttonCount) {
        paginationButtons.push("<li><a>" + index + "</a></li>");
        //+1 to the const index
        index++;
    }
    //close the ul tag containing the button array (paginationButtons)
    paginationButtons.push("</ul>");
    //join the array into one string
    return paginationButtons.join("");
};
//create a click event listener that shows the student array slice when the corresponding button is pressed
var buttonClick = function buttonClick($element) {
    $element.click(function (event) {
        showStudents($students, event.target.innerText);
    });
};

//directions to order the loading of the page
var pageLoad = function pageLoad() {
    //load the $studentContainer after the createButtons function has finished producing the button Array 
    $studentContainer.after(createButtons(buttonCount($students)));
    //calling the showStudents with the student-list array and index of 1
    showStudents($students, 1);
    //call the .pagination class and their children 
    buttonClick($(".pagination").children());
    console.log(buttonCount($students) + " buttons created for " + $students.length + " students");
};

pageLoad();




