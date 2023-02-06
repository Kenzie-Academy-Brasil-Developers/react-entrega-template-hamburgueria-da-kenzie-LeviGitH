import styled from "styled-components";

export const StyleApp = styled.div`
  max-width: 100vw;

  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;

  section {
    display: flex;
    justify-content: space-between;

    max-width: 100vw;

    padding: 0 115px;
    margin-top: 30px;
  }
  @media (max-width: 915px) {
    section {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
