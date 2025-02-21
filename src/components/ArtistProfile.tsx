import styled from "styled-components";
import { Artist } from "../interfaces/Artist.ts";

const AllArtistDiv = styled.div`
    display:flex;
    flex-flow: row wrap;
    background-color: #1E1E2F;
    justify-content: space-evenly;
`;


const SingleArtistDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font: normal small-caps bold calc(2px + 1vw) 'Arial', sans-serif;
    margin: 2%;
    max-width: 25%;
    padding: 5%;
    background-color:rgb(126, 201, 242);
    color: #F0EDEE; 
    border: 3px solid #5A5F78; 
    border-radius: 8px;
`;


export default function ArtistProfile(props: { data: Artist[] }) {
  return (
    <AllArtistDiv>
      {/* I'm using filter so I can filter out the unknown artists and no artist in the results
      Source: https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops  */}
      {props.data
        .filter((artist) => {
          const allLowercase = artist.name.toLowerCase();
          return allLowercase !== "[unknown]" && allLowercase !== "[no artist]" && allLowercase !== "various artists";
        })
        .map((artist: Artist) =>
        <SingleArtistDiv key={artist.id}>
          <h1>{artist.name}</h1>
          <p>Type: {artist.type}</p>
          <p>Disambiguation: {artist.disambiguation || "N/A"}</p>
        </SingleArtistDiv>
      )
      }

    </AllArtistDiv>
  );
}
