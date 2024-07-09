 interface Student {
    id: number;
    name: string;
    age: number;
    major: string; class StudentClass implements Student {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public major: string
    ) {}
}
 class StudentManagement {
    private students: Student[] = [];
    private nextId: number = 1;

    // Create a new student
    createStudent(name: string, age: number, major: string): Student {
        const newStudent = new StudentClass(this.nextId++, name, age, major);
        this.students.push(newStudent);
        return newStudent;
    }

    // Read a student by ID
    getStudentById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

    // Update a student by ID
    updateStudent(id: number, name?: string, age?: number, major?: string): Student | undefined {
        const student = this.getStudentById(id);
        if (student) {
            if (name !== undefined) student.name = name;
            if (age !== undefined) student.age = age;
            if (major !== undefined) student.major = major;
            return student;
        }
        return undefined;
    }

    // Delete a student by ID
    deleteStudent(id: number): boolean {
        const index = this.students.findIndex(student => student.id === id);
        if (index !== -1) {
            this.students.splice(index, 1);
            return true;
        }
        return false;
    }

    // List all students
    listStudents(): Student[] {
        return this.students;
    }
 }
  const studentManagement = new StudentManagement();

// Create students
const student1 = studentManagement.createStudent("John Doe", 20, "Computer Science");
const student2 = studentManagement.createStudent("Jane Smith", 22, "Mathematics");

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