import axios from "axios";
const entries = ({ rankData }) => {
  const soloRankData = rankData[0];
  const flexRankData = rankData[1];
  console.log(soloRankData);
  console.log(flexRankData);

  const summonerName = data.map((info) => info.summonerName);
  const tier = data.map((info) => info.tier);
  const rank = data.map((info) => info.rank);
  // const leaguePoints = data.map((info) => info.leaguePoints);
  // const queueType = data.map((info) => info.queueType);
  // const wins = data.map((info) => info.wins);
  // const losses = data.map((info) => info.losses);
  // const total = wins + losses;

  return (
    <div>
      {/* <p>솔로랭크</p>
      <p>{summonerName}</p>
      <p>{tier + "_" + rank}</p> */}
    </div>
  );
};

export default entries;

export const getServerSideProps = async ({ params: { name } }) => {
  const summonerName = encodeURI(name);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const options = {
    method: "GET",
    url: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": API_KEY,
    },
  };

  const response = await axios.request(options);

  const options2 = {
    method: "GET",
    url: `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": API_KEY,
    },
  };

  const response2 = await axios.request(options2);

  return {
    props: { rankData: response2.data },
  };
};
