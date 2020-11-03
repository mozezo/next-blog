import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 70px;
  background: ${(props) => (props.bg ? props.bg : 'f2f2f2')};

  @media only screen and (max-width: 991px) {
    display:  none;
  }
`;

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div``;
export const RightSide = styled.div``;

export default Wrapper;