
import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import { TasksCard } from '../components/TasksCard' 
export function TasksList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            console.log(res);
            setTasks(res.data);
        }
        loadTasks();
    }, [])
    return (<>
        {tasks.map(tasks => (
            <TasksCard key={tasks.id} tasks={tasks}/>
        ))}
    </>)
}

export default TasksList