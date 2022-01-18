import "./Todo-List.css";

const TodoList = (props) => {
  const data = props.data;

  return (
    <ul>
      {data.map((da) => {
        return <li key={da.id}>{da.title}</li>;
      })}
    </ul>
  );
};
export default TodoList;
