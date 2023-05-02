import React from 'react';
import TaskListComponent from '../../components/container/task_list';

const TaskPage = () => {
    return (
        <div>
        <h1 style={{marginTop:'2rem', marginBottom:'1.5rem'}}>Admin your tasks here</h1>
            <TaskListComponent></TaskListComponent>
        </div>
    );
}

export default TaskPage;
