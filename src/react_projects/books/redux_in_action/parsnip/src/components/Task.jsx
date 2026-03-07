const Task = props => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
            </div>
            <hr />
            <div className="task-body">
                <div>{props.task.description}</div>
            </div>
        </div>
    );
}

export default Task;