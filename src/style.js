import styled from "styled-components";

export const StyleApp = styled.div`
  max-width: 100vw;

  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;

  section {
    display: flex;
    justify-content: space-between;
    align-items: start;
    justify-content: center;

    width: 100vw;

    padding: 0 115px;
    margin-top: 30px;
  }
  @media (max-width: 934px) {
    section {
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
