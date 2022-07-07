import { useState } from "react";
import { useRouter } from "next/router";
import { Container } from "../styles/CommonStyles";

export default function Home() {
  const [summonerName, setSummonerName] = useState();
  const router = useRouter();

  const goToSummonerInfomation = () => {
    router.push({
      pathname: `/entries/${summonerName}`,
    });
  };
  return (
    <Container>
      <input
        onChange={(e) => {
          setSummonerName(e.target.value);
        }}
      />
      <button onClick={goToSummonerInfomation}>검색</button>
    </Container>
  );
}
