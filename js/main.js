
//Access the class of student-item and save the array, named $students, and remove the students from the page
const $students = $(".student-item");
const $studentContainer = $(".student-list");


//selectStudent function passes the sliced array chunk (which carries 10 students info from the slice) and page number parameters
const selectStudents = (studentArray, pageNumber) => {
    return studentArray.slice(pageNumber * 10 - 10, pageNumber * 10);
}

//showStudents function appends the studentElements to the student list "container"
const showStudents = (studentArray, pageIndex) => {
    //empty() removes the $studentContaier and all of its childNodes from page
    $studentContainer.empty();
    //using the studentArray and pageIndex parameters append into the $studentContainer
    $studentContainer.append(selectStudents(studentArray, pageIndex));
}

//math to calculate number of buttons/links needed
const buttonCount = (studentArray) => {
    return Math.ceil(studentArray.length / 10);
}

//create the buttons and append to an array paginationButtons
const createButtons = (buttonCount) => {
    const paginationButtons = ["<ul class=pagination>"];
    //create an index to number the button
    let index = 1;
    //keep making buttons until there equals the return from the buttonCount function
    while (paginationButtons.length <= buttonCount) {
        paginationButtons.push(`<li><a>${index}</a></li>`);
        //+1 to the const index
        index++;
    }
    //close the ul tag containing the button array (paginationButtons)
    paginationButtons.push("</ul>");
    //join the array into one string
    return paginationButtons.join("");
};
const buttonClick = $e => {
    $e.click(event => {
        showStudents($students, event.target.innerText);
    });
}
//directions to order the loading of the page
const pageLoad = () => {
    //load the $studentContainer after the createButtons function has finished producing the button Array 
    $studentContainer.after(createButtons(buttonCount($students)));
    //calling the showStudents with the student-list array and index of 1
    showStudents($students, 1);
    //call the .pagination class and their children 
    buttonClick($(".pagination").children());
    console.log(
        `${buttonCount($students)} buttons created for ${$students.length} students`)
}

pageLoad();




