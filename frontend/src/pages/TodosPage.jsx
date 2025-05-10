import { useState } from "react";

function TodosPage() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() === "") return;
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleDeleteTodo = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  const handleStartEdit = (index) => {
    setEditIndex(index);
    setEditedValue(todoList[index]);
  };

  const handleSaveEdit = () => {
    if (editedValue.trim() === "") return;
    const updatedList = [...todoList];
    updatedList[editIndex] = editedValue;
    setTodoList(updatedList);
    setEditIndex(null);
    setEditedValue("");
  };

  // Basit renk paleti
  const pastelColors = [
    "#E1EFCD",
    "#8ABFB7",
    "#CAB178",
    "#B7DFE4",
    "#E8A79D",
    "#FFE6D0",
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Add Todo</h1>

      <div className="d-flex justify-content-center gap-2 mb-5">
        <input
          type="text"
          className="form-control rounded-pill px-4 py-2"
          placeholder="Write your task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{ maxWidth: "400px" }}
        />
        <button
          className="btn btn-success rounded-pill px-4"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <div className="row g-4">
        {todoList.map((item, index) => (
          <div key={index} className="col-md-4">
            <div
              className="p-4 rounded-4 shadow-sm text-dark position-relative"
              style={{
                backgroundColor: pastelColors[index % pastelColors.length],
                minHeight: "180px",
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h5 className="mb-3">{item}</h5>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleStartEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodosPage;
