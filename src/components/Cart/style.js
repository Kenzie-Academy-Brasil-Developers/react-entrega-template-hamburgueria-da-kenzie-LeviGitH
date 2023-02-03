import styled from "styled-components";

export const StyleCart = styled.div`
  border: 1px solid red;

  width: 18vw;
  height: fit-content;

  header {
    padding-top: 22px;
    padding-bottom: 13px;

    background-color: var(--color-primary);
    border-radius: 5px 5px 0px 0px;
    h1 {
      margin-left: 10px;

      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
    }
  }
  div {
    height: 22vh;

    background-color: var(--gray-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h2 {
      font-family: "Inter", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: var(--gray-100);
    }
    span {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: var(--gray-50);
    }
  }
`;
