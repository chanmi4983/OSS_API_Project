// import { Link, Outlet } from "react-router-dom";
// // import SearchBar from './SearchBar';
// import styled from "styled-components";

// export const Header = () => {
//     return (
//         <div>
//             <HeaderWrapper>
//                 <StyledLink to="/">
//                     <Logo>Gallery Nest</Logo>
//                 </StyledLink>
//                 {/* <SearchBar /> */}
//             </HeaderWrapper>
//             <Outlet />
//         </div>
//     );
// };

// const HeaderWrapper = styled.div`
// width: 100vw;
// height: 5rem;
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// align-items: center;
// background-color: #787fea;
// `

// const Logo = styled.div`
// font-size: 2rem;

// `

// const StyledLink = styled(Link)`
//     text-decoration: none;  // 밑줄 제거
//     color: inherit;         // 링크 색상 제거 (부모 컴포넌트의 색상을 상속)
// `;

import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">GalleryNest</div>
      <nav>
        <ul>
          <li>Exhibition</li>
          <li>Artists</li>
          <li>Art Shop</li>
          <li>Rising Art</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
