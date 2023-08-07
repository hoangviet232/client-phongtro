import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux'

const Comment = ({ author, content }) => {
  const { currentData } = useSelector(state => state.user)

  return (
    <div className="flex items-start gap-4">
      <img className="w-10 h-10 rounded-full" src={author.avatar} alt={author.name} />
      <div>
        <h4 className="font-medium">{author.name}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      author: {
        name: "Trần Hoài Nam An",
        avatar: "https://img6.thuthuatphanmem.vn/uploads/2023/03/24/anh-avatar-khung-long-cute_102147163.jpg"
      },
      content: "Phòng trọ rất sạch sẽ và thoáng mát. Chủ nhà nhiệt tình và thân thiện.",
    },
    {
      author: {
        name: "Võ Đình Tú",
        avatar: "https://img6.thuthuatphanmem.vn/uploads/2023/03/24/anh-avatar-khung-long-dep_102147389.png"
      },
      content: "Phòng trọ mới xây, không gian rộng rãi và yên tĩnh. Rất đáng để thử.",
    },

    {
      author: {
        name: "Trần Nguyễn Hoàng Yến",
        avatar: "https://img6.thuthuatphanmem.vn/uploads/2023/03/24/avatar-khung-long-cute-nhat_102147644.jpg"
      },
      content: "Giá phòng hợp lý, có đầy đủ tiện nghi. Điểm cộng là gần trung tâm thành phố.",
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    const comment = {
      author: {

        name: "viethoang",
        avatar: "http://localhost:3000/static/media/anon-avatar.67bd7d74c157c4fd2d1d.png"
      },
      content: newComment
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="comment-section">
        <h3 className="font-semibold text-xl my-4">Nhận xét :</h3>
        <div className="comments">
          {comments.map((comment, index) => (
            <Comment key={index} author={comment.author} content={comment.content} />
          ))}
        </div>
        <form className="comment-form mt-5" onSubmit={handleAddComment}>

          <textarea
            placeholder="Nhập nhận xét của bạn..."
            className="w-full p-2 border border-gray-300 rounded-md"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
            Gửi nhận xét
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
