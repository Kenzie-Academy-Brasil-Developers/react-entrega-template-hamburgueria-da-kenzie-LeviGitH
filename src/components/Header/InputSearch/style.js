import styled from "styled-components";

export const StyleInputSearch = styled.div`
  max-width: 365px;
  padding: 5px 10px;

  display: flex;

  background-color: #ffffff;
  border: 2px solid var(--gray-20);
  border-radius: 8px;

  :focus-within {
    border 2px solid var(--gray-100);
  }

  input {
    width: 15vw;
    border: none;

    margin-left: 10px;

    background-color: #ffffff;

    color: var(--gray-20);
    font-weight: 400;
    font-size: 16px;
  }
  input:focus {
    outline: none;
    color: var(--gray-50);
  }
  button {
    border: none;
    border-radius: 8px;

    padding: 10.5px 19px;
    margin-right: 10px;

    background-color: var(--color-primary);

    color: #ffffff;
    font-weight: 500;
    font-size: 14px;

    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-primary-50);
  }
`;
