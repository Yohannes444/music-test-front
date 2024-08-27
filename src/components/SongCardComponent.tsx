import React from "react";
import { Song } from "../types/types";
import { SongCard, SongTitle, SongArtist, ButtonContainer, CustomButton, SongImage } from "../assets/style/ListSongsStyle";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface SongCardProps {
  song: Song;
  onEdit: () => void;
  onDelete: () => void;
}

const SongCardComponent: React.FC<SongCardProps> = ({ song, onEdit, onDelete }) => {
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <SongCard>
      <ButtonContainer>
        <CustomButton className="edit" onClick={onEdit}>
          <CiEdit />
        </CustomButton>
        <CustomButton className="delete" onClick={onDelete}>
          <MdOutlineDeleteOutline />
        </CustomButton>
      </ButtonContainer>
      {isYouTubeUrl(song.file) ? (
        <iframe
          width="100%"
          height="200"
          src={getYouTubeEmbedUrl(song.file)}
          title={song.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <SongImage src={song.file} />
      )}
      <SongTitle>{song.title} || {song.artist}</SongTitle>
      <SongArtist>{song.genre}</SongArtist>
    </SongCard>
  );
};

export default SongCardComponent;
