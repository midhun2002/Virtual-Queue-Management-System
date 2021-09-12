import React from 'react'
import './TaskHeader.css'
import { Link } from 'react-router-dom'
function TaskHeader({ Task }) {
    return (
        <div className="Task" id={Task._id} >
            <h6>
                <Link to={`/Tasks/${Task._id}`}>{Task.Title}</Link>
            </h6>
            <h6>{Task.Tag}</h6>
            <h6>{Task.updatedAt}</h6>
        </div>
    )
}

export default TaskHeader

