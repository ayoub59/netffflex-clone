import "./App.css";
import Row from "./Row";
import requests from "./requests";
import NAvBar from "./NAvBar";
import Banner from "./Banner";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "black",
      }}
    >
      <NAvBar />
      <Banner />
      <Row
        title=" NETFLEX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRINDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
