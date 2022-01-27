import styled from "styled-components";

const StyledSpinner = styled.div`
  position: relative;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;

  .container {
    border: 0;
    width: 110px;
    height: 110px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes rotate {
      0% {
        transform: rotate(360deg);
      }
    }
    .spin1,
    .spin2,
    .spin3 {
      position: absolute;
      border-radius: 50%;
      border: 2px solid;
      height: auto;
    }

    .spin1 {
      border-color: red;
      border-bottom: 2px solid transparent;
      width: 110px;
      height: 110px;
      animation: rotate 850ms linear infinite;
    }
    .spin2 {
      border-color: green;
      border-bottom: 2px solid transparent;
      width: 100px;
      height: 100px;
      animation: rotate 1250ms linear infinite;
    }
    .spin3 {
      border-color: blue;
      border-bottom: 2px solid transparent;
      width: 90px;
      height: 90px;
      animation: rotate 500ms linear infinite;
    }
  }
`;

export const Spin = () => {
  return (
    <StyledSpinner>
      <div className="container">
        <div className="spin1"></div>
        <div className="spin2"></div>
        <div className="spin3"></div>
      </div>
    </StyledSpinner>
  );
};
