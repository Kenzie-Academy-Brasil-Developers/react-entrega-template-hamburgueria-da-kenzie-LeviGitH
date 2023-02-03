import styled from "styled-components";

export const StyleProduct = styled.div`
  border: 2px solid var(--gray-20);

  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    padding: 0 42px;
    background-color: var(--gray-0);
    img {
      object-fit: contain;
      object-position: center;
    }
  }
  h1 {
    margin-top: 20px;
    margin-left: 20px;

    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: var(--gray-100);
  }
  span {
    margin-left: 20px;

    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-50);
  }
  h2 {
    margin-left: 20px;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
  }
  button {
    align-self: start;
    margin-left: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;

    font-weight: 600;
    font-size: 14px;
    color: #ffffff;

    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;

    cursor: pointer;
  }
`;
