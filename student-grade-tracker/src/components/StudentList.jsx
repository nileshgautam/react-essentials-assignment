import React from "react";
import StudentCard from "./StudentCard";

class StudentList extends React.Component {
    render() {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {this.props.students && (this.props.students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        updateStudent={this.props.updateStudent}
                        deleteStudent={this.props.deleteStudent}
                    />
                )))}
            </div>
        );
    }
}

export default StudentList;