
import tasklogo2 from '../../assets/images/tasklogo2.png';

//styles
import '../../styles/home.scss'

//elements

import TaskPage from '../tasks/TaskPage';
import TaskDescription from '../../components/pure/TaskDescription';



const HomeTaskPage = () => {



    return (
        <div className='home-task-page'>
            <img 
                style={{padding: 0, margin:'3rem', width:'25rem', height:'12rem'}}
                src={tasklogo2} 
                alt='logo' 
                className='logo'/>
            <div className='task-page'>
                <TaskDescription></TaskDescription>
                <TaskPage></TaskPage>
            </div>
        </div>
    );
}

export default HomeTaskPage;
