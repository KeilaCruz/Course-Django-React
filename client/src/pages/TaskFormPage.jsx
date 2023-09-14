import { useForm } from 'react'
import { createTask } from '../api/tasks.api'
import {useNavigate} from 'react-router-dom'
export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        const res = await createTask(data)
        navigate("/tasks")
    })
    return (<>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="title">
                {...register("title", { required: true })}
            </input>
            {errors.title && <span>Es requerido este campo</span>}
            <textarea rows="3" placeholder="Description"> {...register("Description", { required: true })}</textarea>
            {errors.description && <span>Es requerido este campo</span>}
            <button>Save</button>
        </form>
    </>)
}