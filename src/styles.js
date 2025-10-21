import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  background: #f8f9fb;
  min-height: 100vh;
  padding: 30px 60px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 26px;
  color: #2d2d2d;
  margin-bottom: 20px;
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
  overflow: hidden;
`;

export const Button = styled.button`
  background: #5b6ef5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #4051d7; }
`;
