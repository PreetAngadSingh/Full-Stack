function Todo(props){

    return(
        <>
        <div key={props.index} style={{border:"1px solid black", margin:"10px", padding:"10px", minWidth:"250px"}}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.completed ? "Completed" : "Not Completed"}</p>
        </div>
        </>
    );
}

export default Todo;