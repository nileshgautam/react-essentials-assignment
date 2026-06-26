import React, { Component } from "react";

class FilterControls extends Component {
    render() {
        return (
            <div className="w-full my-6">
                <div className="filter-controls flex flex-col sm:flex-row flex-wrap items-center gap-4">
                    
                    <span className="font-bold text-lg text-white">
                        Filter:
                    </span>

                    <button
                        onClick={() => this.props.changeFilter("all")}
                        className="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                    >
                        All
                    </button>

                    <button
                        onClick={() => this.props.changeFilter("passed")}
                        className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                    >
                        Passed
                    </button>

                    <button
                        onClick={() => this.props.changeFilter("failed")}
                        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                    >
                        Failed
                    </button>

                    <button
                        onClick={this.props.sortStudents}
                        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                    >
                        Sort by Grade
                    </button>

                </div>
            </div>
        );
    }
}

export default FilterControls;