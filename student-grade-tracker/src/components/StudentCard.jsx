import React from "react";
import Modal from "./Modal";
import Swal from 'sweetalert2'


class StudentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            editName: props.student.name,
            editSubject: props.student.subject,
            editGrade: props.student.grade
        };
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    handleGradeChange = (e) => {
        this.props.updateStudent(
            this.props.student.id,
            { ...this.props.student, grade: Number(e.target.value) }
        );
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubjectChange = (e) => {
        this.props.updateStudent(
            this.props.student.id,
            { ...this.props.student, subject: e.target.value }
        );
    };

    deleteStudent = () => {
        Swal.fire({
            title: 'Confirm Delete',
            text: 'Are you sure you want to delete this student?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.deleteStudent(this.props.student.id);
                Swal.fire({
                    title: 'Student Deleted',
                    text: 'Student deleted successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        });
    };

    editStudent = () => {
        this.props.updateStudent(this.props.student.id,
            {
                name: this.state.editName,
                grade: Number(this.state.editGrade),
                subject: this.state.editSubject
            });
        return this.closeModal();
    }


    render() {
        const { name, grade, passed, subject } = this.props.student;
        return (
            <div className={`bg-white shadow-md rounded-lg p-4 border-l-4 ${passed ? "border-green-500" : "border-red-500"} shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                <div className="studentinfo text-left mb-2">
                    <h5 className="text-lg font-semibold">{name}</h5>
                    <p>Subject: {subject}</p>
                    <p>Grade: {grade}%</p>
                    <p>Status: {passed ? "Pass" : "Fail"}</p>
                </div>
                <div className="studentstatus">
                    <div className={`${passed ? "text-green-500" : "text-red-500"} btn`}>
                        {passed ? "Pass" : "Fail"}
                    </div>
                </div>
                <div className="student-actions mt-4 flex justify-between border-t pt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer" size="sm" onClick={this.openModal}>
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2 cursor-pointer" onClick={this.deleteStudent}>
                        Delete
                    </button>
                </div>
                <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
                    <h2 className="text-xl font-bold mb-4">Edit Student</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="editName"
                                value={this.state.editName}
                                onChange={this.handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <select
                                id="subject"
                                name="editSubject"
                                value={this.state.editSubject}
                                onChange={this.handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="physics">Physics</option>
                                <option value="math">Math</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="cs">Computer Science</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                                Grade
                            </label>
                            <input
                                type="number"
                                id="grade"
                                name="editGrade"
                                value={this.state.editGrade}
                                onChange={this.handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={this.closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={this.editStudent}                            >
                                Save
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default StudentCard;