import styled from "styled-components";

export const StyleCartTotal = styled.div`
  width: 363px;
  height: 140px;

  background-color: var(--gray-0);
display: flex;
flex-direction: column;
align-items: center;
gap: 22px;

  .cartDiv__Total {
    padding: 0 10px;
    padding-top: 14px;

    display: flex;
    justify-content: space-between;
    h2 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: var(--gray-100);
    }
    h1 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: var(--gray-50);
    }
  }
  button {
    padding: 0 10px;

    width: 343px;
    height: 60px;

    background-color var(--gray-20);
    border: none;
    border-radius: 8px;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-50);

    cursor: pointer;
  }
`;
