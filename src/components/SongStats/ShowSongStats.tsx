import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStats } from "../../features/Song/SongSlice";
import { RootState } from "../../app/store";
import Layout from "../common/Layout";
import { FaSpinner } from "react-icons/fa";
import { Text } from "rebass";
import {
  StatsList,
  StatsItem,
  Dropdown,
  DropdownOption,
  Container,
  Heading,
  ExpandableList,
  ExpandableListItem,
} from "../../assets/style/ShowSongStatsStyle";

const ShowSongStats: React.FC = () => {
  const dispatch = useDispatch();
  const { songStats, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );
  const [selectedOption, setSelectedOption] = useState("songsByGenre");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchSongsStats());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      {isLoading ? (
        <Text
          fontWeight="bold"
          textAlign="center"
          fontSize="1.5rem"
          marginY="10%"
        >
          <FaSpinner />
          Loading...
        </Text>
      ) : (
        songStats && (
          <Container>
            <StatsList>
              <StatsItem>
                Total Songs: <span>{songStats.totalSongs}</span>
              </StatsItem>
              <StatsItem>
                Total Artists: <span>{songStats.totalArtists}</span>
              </StatsItem>
              <StatsItem>
                Total Albums: <span>{songStats.totalAlbums}</span>
              </StatsItem>
              <StatsItem>
                Total Genres: <span>{songStats.totalGenres}</span>
              </StatsItem>
              <StatsItem>
                <Dropdown
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <DropdownOption value="songsByGenre">Songs By Genre</DropdownOption>
                  <DropdownOption value="songsByArtist">Songs By Artist</DropdownOption>
                  <DropdownOption value="songsByAlbum">Songs By Album</DropdownOption>
                  <DropdownOption value="albumsByArtist">Albums By Artist</DropdownOption>
                </Dropdown>
              </StatsItem>
            </StatsList>
            {selectedOption === "songsByGenre" && (
              <>
                <Heading>Songs By Genre</Heading>
                <ExpandableList>
                  {songStats.songsByGenre.map((genreInfo, index) => (
                    <ExpandableListItem
                      key={genreInfo._id}
                      isOpen={openIndex === index}
                    >
                      <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        {genreInfo._id} <span>{genreInfo.TotalSongsByGenre}</span>
                        {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                      </h3>
                      <ul>
                        {genreInfo.Songs.map((song: string) => (
                          <li key={song}>{song}</li>
                        ))}
                      </ul>
                    </ExpandableListItem>
                  ))}
                </ExpandableList>
              </>
            )}
            {selectedOption === "songsByArtist" && (
              <>
                <Heading>Songs By Artist</Heading>
                <ExpandableList>
                  {songStats.songsByArtist.map((artistInfo, index) => (
                    <ExpandableListItem
                      key={artistInfo._id}
                      isOpen={openIndex === index}
                    >
                      <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        {artistInfo._id} <span>{artistInfo.TotalSongsByArtist}</span>
                        {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                      </h3>
                      <ul>
                        {artistInfo.Songs.map((song: string) => (
                          <li key={song}>{song}</li>
                        ))}
                      </ul>
                    </ExpandableListItem>
                  ))}
                </ExpandableList>
              </>
            )}
            {selectedOption === "songsByAlbum" && (
              <>
                <Heading>Songs By Album</Heading>
                <ExpandableList>
                  {songStats.songsByAlbum.map((albumInfo, index) => (
                    <ExpandableListItem
                      key={albumInfo._id}
                      isOpen={openIndex === index}
                    >
                      <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        {albumInfo._id} <span>{albumInfo.TotalSongsByAlbum}</span>
                        {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                      </h3>
                      <ul>
                        {albumInfo.Songs.map((song: string) => (
                          <li key={song}>{song}</li>
                        ))}
                      </ul>
                    </ExpandableListItem>
                  ))}
                </ExpandableList>
              </>
            )}
            {selectedOption === "albumsByArtist" && (
              <>
                <Heading>Albums By Artist</Heading>
                <ExpandableList>
                  {songStats.albumsByArtist.map((albumInfo, index) => (
                    <ExpandableListItem
                      key={albumInfo._id}
                      isOpen={openIndex === index}
                    >
                      <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        {albumInfo._id} <span>{albumInfo.TotalAlbums}</span>
                        {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                      </h3>
                      <ul>
                        {albumInfo.Albums.map((album: string) => (
                          <li key={album}>{album}</li>
                        ))}
                      </ul>
                    </ExpandableListItem>
                  ))}
                </ExpandableList>
              </>
            )}
          </Container>
        )
      )}
    </Layout>
  );
};

export default ShowSongStats;
