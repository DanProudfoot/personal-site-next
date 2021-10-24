import Head from "next/head";

import { Page } from "components/Layout/Layout";
import HomeHeader from "sections/HomeHeader/HomeHeader";
import Footer from "sections/Footer/Footer";
import Intro from "sections/Intro/Intro";
import HomeItems from "sections/HomeItems/HomeItems";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Home | Dan Proudfoot</title>
        <meta
          name="description"
          content="The home (on the internet) of Dan Proudfoot, Front End Dev"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />

      <Intro />

      <HomeItems />

      <Footer />
    </Page>
  );
}
