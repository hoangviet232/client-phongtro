// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CommentSection = ({ postId }) => {
//     const [comments, setComments] = useState([]);

//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 const response = await axios.get(`URL_API/${postId}/comments`);
//                 setComments(response.data);
//             } catch (error) {
//                 console.error('Lỗi khi lấy bình luận: ', error);
//             }
//         };

//         fetchComments();
//     }, [postId]);

//     // Hàm xáo trộn mảng bình luận ngẫu nhiên
//     const shuffleComments = (array) => {
//         const shuffledArray = array.slice();
//         for (let i = shuffledArray.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//         }
//         return shuffledArray;
//     };

//     const randomComments = shuffleComments(comments);

//     return (
//         <div>
//             <h3 className="font-semibold text-xl my-4">Bình luận</h3>
//             {randomComments.map((comment, index) => (
//                 <div key={index} className="my-2">
//                     <p>{comment.text}</p>
//                     <p>{comment.author}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CommentSection;
