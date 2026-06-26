import React from "react";
import Swal from 'sweetalert2'

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subject: "",
            grade: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, grade } = this.state;

        if (!name.trim() || !subject.trim() || !grade) {

            Swal.fire({
                title: 'Validation Error',
                text: 'All fields are required',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (name && subject && grade) {
            this.props.addStudent({
                id: Date.now(),
                name,
                subject,
                grade: Number(grade),
                passed: Number(grade) >= 50
            });
            this.setState({ name: "", subject: "", grade: "" });
        }


    };

    render() {
        return (
            <div className="justify-center items-center my-4">
                <form
                    onSubmit={this.handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    method="post"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 align-left">
                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                placeholder="Enter name.."
                            />
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="subject"
                            >
                                Subject
                            </label>

                            <select
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                placeholder="Select a subject.."
                            >
                                <option value="">Select a subject</option>
                                <option value="physics">Physics</option>
                                <option value="math">Math</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="cs">Computer Science</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="grade"
                            >
                                Grade
                            </label>

                            <input

                                type="number"
                                name="grade"
                                value={this.state.grade}
                                onChange={this.handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                placeholder="Enter grade.."
                            />
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded cursor-pointer"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default StudentForm;