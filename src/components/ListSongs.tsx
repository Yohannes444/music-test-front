import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { RootState } from "../app/store";
import { FaSpinner } from "react-icons/fa";
import Modal from "./Modal/Modal";
import Layout from "./common/Layout";
import {
  ResponsiveFlex,
  Pagination,
  StyledActiveButton,
  CustomButton, // Updated import
} from "../assets/style/ListSongsStyle";
import SongCardComponent from "./SongCardComponent";
import UpdateSong from "./UpdateSong"; // Ensure these components are correctly imported
import DeleteSong from "./DeleteSong";
import { Button } from "../assets/style/NavbarStyle";
import CreateSong from "./CreateSong";
import { IoMdAdd } from "react-icons/io";

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, isLoading } = useSelector(
    (state: RootState) => state.songs
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 8; // Reduce number of cards per row to give more space

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(songs.length / songsPerPage);



  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modalContent1, setModalContent1] = useState<React.ReactNode | null>(
    null
  );

  const handleOpenModal1 = (component: React.ReactNode) => {
    setModalContent1(component);
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setModalContent1(null);
    setIsModalOpen1(false);
  };
  return (
    <Layout>
      <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end" ,paddingTop:"20px" }}>
      <Button
        onClick={() =>
          handleOpenModal1(<CreateSong onClose={handleCloseModal1} />)
        }
      > 
        <IoMdAdd /> Create Song
      </Button>
      </div>
      <Modal
        isOpen={isModalOpen1}
        onClose={handleCloseModal1}
        component={modalContent1}
      />
      <ResponsiveFlex justifyContent="space-between" flexWrap="wrap">
        {isLoading ? (
          <div>
            <FaSpinner /> Loading...
          </div>
        ) : (
          currentSongs.map((song) => (
            <SongCardComponent
              key={song._id}
              song={song}
              onEdit={() =>
                handleOpenModal(
                  <UpdateSong onClose={handleCloseModal} id={song._id} />
                )
              }
              onDelete={() =>
                handleOpenModal(
                  <DeleteSong onClose={handleCloseModal} id={song._id} />
                )
              }
            />
          ))
        )}
      </ResponsiveFlex>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return pageNumber === currentPage ? (
            <StyledActiveButton
              key={index}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </StyledActiveButton>
          ) : (
            <CustomButton key={index} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </CustomButton>
          );
        })}
      </Pagination>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </Layout>
  );
};

export default ListSongs;
