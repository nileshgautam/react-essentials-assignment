import React from "react";
import "./App.css";

import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import FilterControls from "./components/FilterControls";
import Swal from 'sweetalert2'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filter: "All",
      order: "desc"
    };
  }
  componentDidMount() {
    console.log("App Mounted");
    const students = [
      { id: 1, name: "John Doe", subject: "Physics", grade: "95", passed: true },
      { id: 2, name: "Jane Smith", subject: "Math", grade: "85", passed: true },
      { id: 3, name: "Alice Johnson", subject: "Chemistry", grade: "75", passed: true },
      { id: 4, name: "Bob Brown", subject: "Computer Science", grade: "45", passed: false },
    ];
    this.setState({ students });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.students.length !== this.state.students.length) {
      console.log("Student list updated");
    }
  }

  componentWillUnmount() {
    console.log("App Unmounted");
  }

  addStudent = (student) => {

    this.setState({
      students: [...this.state.students, student]
    });

    Swal.fire({
      title: 'Student Added',
      text: 'Student added successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    });

  };

  deleteStudent = (id) => {
    this.setState({
      students: this.state.students.filter(
        student => student.id !== id
      )
    });
    Swal.fire({
      title: 'Student Deleted',
      text: 'Student deleted successfully',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  updateStudent = (id, student) => {
    const { grade, subject } = student;
    this.setState({
      students: this.state.students.map(student =>
        student.id === id
          ? {
            ...student,
            grade,
            subject,
            passed: grade >= 50
          }
          : student
      )
    });
    Swal.fire({
      title: 'Student Updated',
      text: 'Student updated successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  sortStudents = () => {
    const sorted = [...this.state.students].sort(
      (a, b) => b.grade - a.grade
    );

    this.setState({ students: sorted });
  };

  getFilteredStudents() {
    if (this.state.filter === "passed") {
      return this.state.students.filter(s => s.passed);
    }

    if (this.state.filter === "failed") {
      return this.state.students.filter(s => !s.passed);
    }

    return this.state.students;
  }

  render() {
    return (
      <div className="container mx-auto p-4">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md my-6 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Students Grade Tracker
          </h1>
          <p className="text-white/90 mt-2 text-center">
            Manage, filter, and track student performance easily
          </p>
        </header>
        <main>
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md my-6">
            <StudentForm addStudent={this.addStudent} />
          </section>
         <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg section-filter-controls flex flex-col md:flex-row justify-between items-center p-2 my-6">
            <FilterControls
              filter={this.state.filter}
              changeFilter={this.changeFilter}
              sortStudents={this.sortStudents}
            />
            <div className="stat grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <p className="font-bold text-center bg-white p-3 rounded-lg shadow">
                Total Students: {this.state.students.length}
              </p>

              <p className="font-bold text-center bg-green-100 p-3 rounded-lg shadow">
                Passed: {this.state.students.filter(student => student.passed).length}
              </p>

              <p className="font-bold text-center bg-red-100 p-3 rounded-lg shadow">
                Failed: {this.state.students.filter(student => !student.passed).length}
              </p>
            </div>
          </section>
          <section className="section-student-list my-6 bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md">
            <StudentList
              students={this.getFilteredStudents()}
              updateStudent={this.updateStudent}
              deleteStudent={this.deleteStudent}
            />
          </section>

        </main>
      </div >
    );
  }
}

export default App;