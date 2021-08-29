import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 234.92px;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
`;

export const FalseInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: #e5e5e5 1px;
  background-color: white;

  margin-top: 48.3px;
  height: 56px;
  width: 339px;
  padding-left: 20px;
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;

  color: #535353;
  font-size: 20px;
  line-height: 24px;
`;

export const InputError = styled.p`
  position: absolute;
  right: 0;
  margin-right: 16px;
  color: red;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  border: #e5e5e5 1px;
  outline: none;

  margin-top: 19px;
  height: 56px;
  width: 339px;
  padding-left: 106px;
  background-color: #ffce00;

  color: #030202;
  font-size: 20px;
  font-weight: Bold;
  line-height: 25px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
`;
