const class07Students = [];
function addStudentToClass(studentName) {

  if (studentName === '') {
    console.log("You cannot add an empty string to the class");
    return;
  }

  if (studentName === 'Queen') {
    class07Students.push(studentName);
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
    return;
  }

  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }
  
  class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Test the code
addStudentToClass("Benjamin");
addStudentToClass("Isaac");
addStudentToClass("Benjamin"); // Already in the class
addStudentToClass("Michelle");
addStudentToClass("John");
addStudentToClass(""); // Empty string
addStudentToClass("Anna");
addStudentToClass("James");
addStudentToClass("Natasha"); // Cannot add more students
addStudentToClass("Queen"); // Always add Queen
addStudentToClass("Queen"); // Already in the class