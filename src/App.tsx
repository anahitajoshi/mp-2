import ArtistProfile from "./components/ArtistProfile";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Artist } from "./interfaces/Artist";

const ParentDiv = styled.div`
    width: 100vw;
    border: 5px black solid;
    margin: auto;
`;

export default function App() {
  const [data, setData] = useState<Artist[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      // My API needs a query to work, so I tried to randomize it by searching for a random letter, and also offsetting the results.
      // This fetches artists with a random letter. 
      // I also tried to make the artists it fetches random but giving it a random offset using the math function
      const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
      const random = Math.floor(Math.random() * 800); 
      const rawData = await fetch(`https://musicbrainz.org/ws/2/artist?query=${randomLetter}&fmt=json&offset=${random}`);
      const { artists }: { artists: Artist[] } = await rawData.json();
      setData(artists);
    }

    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was an error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <ArtistProfile data={data} />
    </ParentDiv>
  );
}
