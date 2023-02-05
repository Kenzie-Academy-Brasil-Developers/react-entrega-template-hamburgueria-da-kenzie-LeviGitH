import styled from "styled-components";

export const StyleCartProduct = styled.div`
  width: 343px;
  height: 80px;

  display: flex;
  align-items: start;
  justify-content: space-between;

  .productDiv__Perfil {
    display: flex;
    align-items: start;
    gap: 10px;
    .productDiv__Image {
      width: 80px;
      height: 80px;
      background-color: var(--gray-20);
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 70px;
        height: 70px;

        object-fit: contain;
      }
    }
    .productDiv__Text {
      margin-top: 5px;

      display: flex;
      flex-direction: column;
      gap: 5px;

      h1 {
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: var(--gray-100);
      }
      span {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: var(--gray-50);
      }
    }
  }
  button {
    background-color: transparent;
    border: none;

    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #bdbdbd;

    cursor: pointer;
  }
`;
