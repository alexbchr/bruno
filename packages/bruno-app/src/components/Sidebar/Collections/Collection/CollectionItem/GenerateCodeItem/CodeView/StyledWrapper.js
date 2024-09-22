import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;

  .copy-to-clipboard {
    cursor: pointer;

    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledWrapper;
