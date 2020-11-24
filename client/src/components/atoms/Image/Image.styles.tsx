import styled from 'styled-components';

const getImageStyle = (props) => {
  let width; let height; 

  switch (props.variant) {
    case 'primary':     //today - magazine card & vibe 추천 플레이리스트 카드의 썸네일
        width = '310px';
        height = '310px';
      break;
    case 'normalMagazine':     //VIBE MAG의 일반 매거진 카드의 썸네일
      width = '274px';
      height = '274px';
    break;
    case 'normalMagazine':     //보관함 헤더의 썸네일 & DJ 스테이션
        width = '180.64px';
        height = '180.64px';
    break;
    case 'news':   //news
        width = '310px';
        height = '182px';
      break;
    case 'detailThumbnail':    //앨범 & 플레이리스트 등 상세 페이지 헤더 부분
        width = '176px';
        height = '176px';
    break;
    case 'trackRowCard':  //track row card
        width = '40px';
        height = '40px';
    break;
    case 'trackInfo':  //track info
        width = '45px';
        height = '45px';
    break;
    default:            //일반 플레이리스트 카드의 썸네일
        width = '162px';
        height = '162px';
      break;
  }

  return `
    width: ${width};
    height: ${height};
  `;
};

export const StyledImage = styled.img`
  ${(props) => getImageStyle(props)};
  object-fit: cover;
`;

export default StyledImage;
