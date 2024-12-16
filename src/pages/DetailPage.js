import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchArtworks } from "../apis/API";
import CommentSection from "../components/CommentSection"; // 댓글 컴포넌트 추가

function DetailPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const artworks = await fetchArtworks();
        console.log("API 응답:", artworks); // API 데이터 확인
        const selectedArtwork = artworks.find(
          (item, index) => index.toString() === id // index와 id 비교
        );
        console.log("선택된 작품:", selectedArtwork); // 선택된 데이터 확인
        setArtwork(selectedArtwork);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };
    fetchArtwork();
  }, [id]);

  if (!artwork) return <p>Loading...</p>;

  return (
    <DetailWrapper>
      <div>
        <h1>{artwork.title}</h1>
        <p><strong>작가:</strong> {artwork.creator || "정보 없음"}</p>
        <p><strong>설명:</strong> {artwork.description || "설명이 없습니다."}</p>
      </div>

      {/* 댓글 컴포넌트 추가 */}
      <CommentSection />
    </DetailWrapper>
  );
}

export default DetailPage;

const DetailWrapper = styled.div`
  padding: 2rem;
`;
