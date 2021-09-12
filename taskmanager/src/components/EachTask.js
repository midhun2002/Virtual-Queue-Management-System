import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './EachTask.css'
function EachTask({ match }) {
    const [Task, setTask] = useState({})
    useEffect(() => {
        axios.get(`https://beginner-blog.herokuapp.com/Tasks/${match.params.id}`)
            .then(res => setTask(res.data))
            .catch(err => alert("Error occured"))
    }, [])
    return (
        <div className="Task" id={Task._id} >
            <h6>{Task.Title}</h6>
            <h6>{Task.Tag}</h6>
            <h6>{Task.updatedAt}</h6>
            <h6>{Task.Description}</h6>
        </div>
    )
}

export default EachTask

