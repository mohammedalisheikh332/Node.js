var StudentClass = /** @class */ (function () {
    function StudentClass(id, name, age, major) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.major = major;
    }
    return StudentClass;
}());
var StudentManagement = /** @class */ (function () {
    function StudentManagement() {
        this.students = [];
        this.nextId = 1;
    }
    // Create a new student
    StudentManagement.prototype.createStudent = function (name, age, major) {
        var newStudent = new StudentClass(this.nextId++, name, age, major);
        this.students.push(newStudent);
        return newStudent;
    };
    // Read a student by ID
    StudentManagement.prototype.getStudentById = function (id) {
        return this.students.find(function (student) { return student.id === id; });
    };
    // Update a student by ID
    StudentManagement.prototype.updateStudent = function (id, name, age, major) {
        var student = this.getStudentById(id);
        if (student) {
            if (name !== undefined)
                student.name = name;
            if (age !== undefined)
                student.age = age;
            if (major !== undefined)
                student.major = major;
            return student;
        }
        return undefined;
    };
    // Delete a student by ID
    StudentManagement.prototype.deleteStudent = function (id) {
        var index = this.students.findIndex(function (student) { return student.id === id; });
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    };
    // List all students
    StudentManagement.prototype.listStudents = function () {
        return this.students;
    };
    return StudentManagement;
}());
var studentManagement = new StudentManagement();
// Create students
var student1 = studentManagement.createStudent("John Doe", 20, "Computer Science");
var student2 = studentManagement.createStudent("Jane Smith", 22, "Mathematics");
// List students
console.log("All Students:", studentManagement.listStudents());
// Read student by ID
console.log("Student with ID 1:", studentManagement.getStudentById(1));
// Update student by ID
studentManagement.updateStudent(1, "Johnathan Doe", 21);
console.log("Updated Student with ID 1:", studentManagement.getStudentById(1));
// Delete student by ID
studentManagement.deleteStudent(2);
console.log("All Students after deletion:", studentManagement.listStudents());
