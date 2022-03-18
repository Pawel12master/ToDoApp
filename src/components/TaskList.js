import Task from "./Task";
const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => !task.active === true);

  done.sort((a, b) => b.finishdate - a.finishdate);
  active.sort((a,b)=>{
    if(a.text < b.text){
      return -11
    }
    if(a.text>b.text){
      return 1
    }
    return 0
  })
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>List of Tasks-to do</h1>
        {activeTasks.length > 0 ? activeTasks : "Nothing to do"}
      </div>
      <hr></hr>
      <div className="done">
        <h1>List of Tasks-done({doneTasks.length})</h1>
        {doneTasks}
      </div>
    </>
  );
};
export default TaskList;
