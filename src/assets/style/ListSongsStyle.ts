// ListSongsStyle.ts

import styled from "@emotion/styled";
import { Flex } from "rebass";
import { Button as MuiButton } from "@mui/material"; // Import from MUI

// Define BaseButton if it was meant to be a custom button
export const BaseButton = styled(MuiButton)`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
`;

// Define StyledActiveButton using BaseButton
export const StyledActiveButton = styled(BaseButton)`
  background-color: #007bff; /* Customize as needed */
  color: #fff;

  &:hover {
    background-color: #0056b3; /* Darker blue for hover state */
    transform: scale(1.05);
  }
`;

// Card container styling
export const SongCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  // padding: 20px;
  margin: 20px;
  flex: 1 0 22%;
 width: 100%;
  position: relative; /* Added to position buttons inside the card */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    flex: 1 0 48%;
    max-width: 100%;
    margin: 10px;
  }
`;

// Button container styling
export const ButtonContainer = styled.div`
  position: absolute; /* Absolute positioning inside the card */
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

// Custom Button styling
export const CustomButton = styled.button`
  padding: 7px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &.edit {
    background-color: #007bff; /* Blue color for edit button */
  }

  &.delete {
    background-color: #dc3545; /* Red color for delete button */
  }

  &:hover {
    background-color: #fafbfc;
    transform: scale(1.05);
  }
`;

// Title styling
export const SongTitle = styled.h3`
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 1.4rem;
  color: #333;
  font-weight: bold;
`;

// Artist styling
export const SongArtist = styled.p`
  margin-bottom: 10px;
  padding: 0 20px;
  font-size: 1.1rem;
  color: #666;
`;

// Flex container styling
export const ResponsiveFlex = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.4rem; 
  width: 100%;
  padding:10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 1rem;
    justify-content: center; 
  }
`;

// Pagination styling
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  & > Button {
    font-size: 1.2rem;
    padding: 5px 10px;
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

// Song file container styling
export const SongFileContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 30px; /* Padding between buttons and iframe */
  position: relative;
  
  /* Remove horizontal margins for the iframe */
  iframe {
    width: 100%; /* Adjust width to fit container */
    height: 200px;
    border-radius: 8px;
    border: none;
  }
`;

export const SongImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;
