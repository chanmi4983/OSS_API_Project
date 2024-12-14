import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import artworks from "../components/data.json"; 

function DetailPage() {
  const { id } = useParams();

  // id로 작품 데이터 찾기
  const artwork = artworks.find((item) => item.RSTR_ID === id);

  // 댓글 상태 관리
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editContent, setEditContent] = useState("");

  if (!artwork) {
    return <p>작품 정보를 찾을 수 없습니다.</p>;
  }

  // 댓글 추가
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // 댓글 삭제
  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  // 댓글 수정
  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditContent(comments[index]);
  };

  const handleUpdateComment = () => {
    const updatedComments = [...comments];
    updatedComments[editIndex] = editContent;
    setComments(updatedComments);
    setEditIndex(null);
    setEditContent("");
  };

  return (
    <Container>
      <h1>{artwork.RSTR_NM}</h1>
      <ImageContainer>
        {artwork.IMAGE_URL ? (
          <img src={artwork.IMAGE_URL} alt={`${artwork.RSTR_NM} 이미지`} />
        ) : (
          <p>이미지가 없습니다.</p>
        )}
      </ImageContainer>
      <p><strong>주소:</strong> {artwork.RSTR_RDNMADR}</p>
      <p><strong>업종:</strong> {artwork.BSNS_STATM_BZCND_NM}</p>
      <p>{artwork.RSTR_INTRCN_CONT}</p>

      {/* 댓글 섹션 */}
      <CommentsSection>
        <h2>댓글</h2>

        {/* 댓글 입력 폼 */}
        {editIndex === null ? (
          <CommentInput>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요."
            />
            <button onClick={handleAddComment}>댓글 추가</button>
          </CommentInput>
        ) : (
          <CommentInput>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="댓글을 수정하세요."
            />
            <button onClick={handleUpdateComment}>댓글 수정</button>
          </CommentInput>
        )}

        {/* 댓글 리스트 */}
        <ul>
          {comments.map((comment, index) => (
            <Comment key={index}>
              <p>{comment}</p>
              <Actions>
                <button onClick={() => handleEditComment(index)}>수정</button>
                <button onClick={() => handleDeleteComment(index)}>삭제</button>
              </Actions>
            </Comment>
          ))}
        </ul>
      </CommentsSection>
    </Container>
  );
}

export default DetailPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

const CommentsSection = styled.div`
  margin-top: 40px;

  h2 {
    margin-bottom: 20px;
  }
`;

const CommentInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  textarea {
    resize: none;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
  }

  button {
    align-self: flex-end;
    padding: 8px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Comment = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  p {
    margin: 0;
  }
`;

const Actions = styled.div`
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #6c757d;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #5a6268;
    }

    &:last-child {
      background-color: #dc3545;

      &:hover {
        background-color: #c82333;
      }
    }
  }
`;
