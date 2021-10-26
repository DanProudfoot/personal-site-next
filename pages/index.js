import Head from "next/head";

import { Page } from "components/Page";
import Footer from "sections/Footer";
import HomeHeader from "sections/Home/HomeHeader";
import HomeIntro from "sections/Home/HomeIntro";
import HomeItems from "sections/Home/HomeItems";

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

      <HomeIntro />

      <HomeItems />

      <Footer />
    </Page>
  );
}
