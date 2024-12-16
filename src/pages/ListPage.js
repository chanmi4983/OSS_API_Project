import React, { useEffect, useState } from "react";
import { fetchArtworks } from "../apis/API";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "./Restaurants.css";

function ListPage() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const items = await fetchArtworks(page);
        setArtworks((prev) => [...prev, ...items]);
      } catch (err) {
        setError("데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    loadArtworks();
  }, [page]);

  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-container">
      <h1>작품 리스트</h1>

      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />

      {loading && <p>로딩 중...</p>}
      {error && <p>{error}</p>}

      <div className="card-container">
        {filteredArtworks.map((artwork, index) => (
          <div key={index} className="card">
            <img
              src={artwork.referenceIdentifier || "https://via.placeholder.com/300x400"}
              alt={artwork.title || "작품 이미지"}
              className="art-image"
            />
            <div className="card-details">
              <h2 className="title">{artwork.title || "제목 없음"}</h2>
              <p className="creator">{artwork.creator || "작가 미상"}</p>
              <p className="date">{artwork.regDate || "날짜 없음"}</p>
              <Link to={`/detail/${index}`} className="comment-button">
                댓글 달기
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="load-more" onClick={() => setPage((prev) => prev + 1)}>
        더 보기
      </button>
    </div>
  );
}

export default ListPage;

// import React, { useEffect, useState } from "react";
// import { fetchArtworks } from "../apis/API";
// import { Link } from "react-router-dom";
// import "./Restaurants.css";

// function ListPage() {
//   const [artworks, setArtworks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const loadArtworks = async () => {
//       try {
//         const items = await fetchArtworks(page);
//         setArtworks((prev) => [...prev, ...items]);
//       } catch (err) {
//         setError("데이터를 불러오는 데 실패했습니다.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadArtworks();
//   }, [page]);

//   return (
//     <div className="main-container">
//       <h1>작품 리스트</h1>
//       {loading && <p>로딩 중...</p>}
//       {error && <p>{error}</p>}
//       <div className="card-container">
//         {artworks.map((artwork, index) => (
//           <div key={index} className="card">
//             <img
//               src={artwork.referenceIdentifier || "https://via.placeholder.com/300x400"}
//               alt={artwork.title || "작품 이미지"}
//               className="art-image"
//             />
//             <div className="card-details">
//               <h2 className="title">{artwork.title || "제목 없음"}</h2>
//               <p className="creator">{artwork.creator || "작가 미상"}</p>
//               <p className="date">{artwork.regDate || "날짜 없음"}</p>
//               <Link to={`/detail/${index}`} className="comment-button">
//                 댓글 달기
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="load-more" onClick={() => setPage((prev) => prev + 1)}>
//         더 보기
//       </button>
//     </div>
//   );
// }

// export default ListPage;
