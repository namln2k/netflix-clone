import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Row from '@/components/Row';
import { Movie } from '@/typings';
import endpoints from '@/utils/apiEndpoints';
import Head from 'next/head';

interface Props {
  actionMovies: Movie[];
  comedyMovies: Movie[];
  documentaries: Movie[];
  horrorMovies: Movie[];
  netflixOriginals: Movie[];
  romanceMovies: Movie[];
}

export default function Home({
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  netflixOriginals,
  romanceMovies,
}: Props) {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="A Netflix clone built using Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Banner netflixOriginals={netflixOriginals}></Banner>
        <section className="pl-[24px] pt-[24vh] lg:pd-[64px]">
          <Row title="Action" movies={actionMovies}></Row>
          <Row title="Comedy" movies={comedyMovies}></Row>
          <Row title="Documentary" movies={documentaries}></Row>
          <Row title="Horror" movies={horrorMovies}></Row>
          <Row title="Netflix Originals" movies={netflixOriginals}></Row>
          <Row title="Romance" movies={romanceMovies}></Row>
        </section>
      </main>
      {/* <Modal></Modal> */}
    </div>
  );
}

export async function getServerSideProps() {
  const [
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    netflixOriginals,
    romanceMovies,
  ] = await Promise.all([
    fetch(endpoints.actionMovies).then((res) => res.json()),
    fetch(endpoints.comedyMovies).then((res) => res.json()),
    fetch(endpoints.documentaries).then((res) => res.json()),
    fetch(endpoints.horrorMovies).then((res) => res.json()),
    fetch(endpoints.netflixOriginals).then((res) => res.json()),
    fetch(endpoints.romanceMovies).then((res) => res.json()),
  ]);

  return {
    props: {
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      documentaries: documentaries.results,
      horrorMovies: horrorMovies.results,
      netflixOriginals: netflixOriginals.results,
      romanceMovies: romanceMovies.results,
    },
  };
}
