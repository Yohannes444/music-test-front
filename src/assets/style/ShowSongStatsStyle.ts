import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 1rem;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  span {
    background: #181d38;
    color: #fafbfc;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: #181d38;
  color: #fafbfc;
  border: none;
  cursor: pointer;
`;

export const DropdownOption = styled.option`
  color: #fafbfc;
  background: #181d38;
`;

export const Container = styled.div`
  padding: 1rem;
`;

export const Heading = styled.h2`
  color: #181d38;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
`;

export const ExpandableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0.25rem 0;
    }
  }

  & > div {
    margin-bottom: 1rem;
  }
`;

ExpandableList.Item = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  ul {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding-left: 1rem;
  }
`;
