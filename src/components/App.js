import React, { useState } from "react";
import QualityComments from "./QualityComments";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddComment = () => {
    if (inputValue.trim() !== "") {
      const newComment = {
        author: {
          name: "User",
          avatar: "https://example.com/avatar.jpg",
        },
        content: inputValue,
      };

      setComments([...comments, newComment]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Nhập bình luận:</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddComment}>Thêm bình luận</button>

      <QualityComments comments={comments} />
    </div>
  );
};

export default App;
