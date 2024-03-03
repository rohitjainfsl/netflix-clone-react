import "./netflix.css";
import endpoints from "./endpoints";
import Row from "./Row";
import Banner from "./Banner";
import Header from "./Header";

function Main() {
  // useEffect - when you want a code to run exactly once

  document.title = "Netflix Clone";

  return (
    <>
      <Header />
      <Banner endpoint={endpoints.trending} />
      <Row
        endpoint={endpoints.netflixOriginals}
        heading="Netflix Originals"
        bigImage={true}
      />
      <Row endpoint={endpoints.trending} heading="Trending Movies" />
      <Row endpoint={endpoints.topRated} heading="Top Rated" />
      <Row endpoint={endpoints.actionMovies} heading="Action Movies" />
      <Row endpoint={endpoints.comedyMovies} heading="Comedy Movies" />
      <Row endpoint={endpoints.horrorMovies} heading="Horror Movies" />
      <Row endpoint={endpoints.romanticMovies} heading="Romantic Movies" />
      <Row endpoint={endpoints.documentaries} heading="Documentaries" />
    </>
  );
}

export default Main;
