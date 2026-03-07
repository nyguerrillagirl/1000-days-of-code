import { Component } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {

    renderTaskLists() {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const filteredTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={filteredTasks} />
        });
    }

    render() {
        return (
            <div className="tasks">
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        )
    }
}

export default TasksPage;