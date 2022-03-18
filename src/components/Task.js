const Task = (props) => {
  const { text, date, id, active, important, finishdate } = props.task;
  const style = {
    color: `red`,
  };
  const finish = new Date(finishdate).toLocaleString()
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style: null}>{text}</strong> - to <span>{date} </span>
          <button onClick={() => props.change(id)}>Task Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
  else{
    return(
      <div>
        <p>
          <strong >{text}</strong><em>(do to){date} </em><br/>
          -confirmation of execution <span>{finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    )
  }
};

export default Task;
