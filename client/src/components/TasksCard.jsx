import React from 'react'
import { useNavigate } from 'react-router-dom'
export function TasksCard({ tasks }) {
    const navigate = useNavigate()

    return (

        <div style={{ background: "black" }} onClick={() => {
            navigate(`/tasks/${tasks.id}`)
        }}>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
        </div>
    )
}

export default TasksCard