import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import artworks from "../components/data.json"; // 올바른 상대 경로로 수정


function DetailPage() {
  const { id } = useParams();

  // id로 작품 데이터 찾기
  const artwork = artworks.find((item) => item.RSTR_ID === id);

  if (!artwork) {
    return <p>작품 정보를 찾을 수 없습니다.</p>;
  }

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
