import React, { useState } from "react";
import styled from "styled-components";

function CommentSection() {
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새 댓글 상태

  // 댓글 추가 함수
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <CommentsWrapper>
      <h2>댓글</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="댓글을 입력하세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>댓글 추가</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </CommentsWrapper>
  );
}

export default CommentSection;

const CommentsWrapper = styled.div`
  margin-top: 2rem;

  .input-section {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      background: #f1f1f1;
      margin: 0.5rem 0;
      padding: 0.5rem;
      border-radius: 5px;
    }
  }
`;
