import Head from "next/head";
import { motion } from "framer-motion";

import { Page, Section } from "components/Page";
import Footer from "sections/Footer";
import HomeHeader from "sections/Home/HomeHeader";
import HomeIntro from "sections/Home/HomeIntro";
import HomeItems from "sections/Home/HomeItems";
import { JaggedEdge } from "components/JaggedEdge";
import { Theme } from "components/Theme";
import { Col, Row } from "components/Grid";

const workPages = [
  {
    name: "xDesign",
    url: "/career/xdesign",
    when: "2021 - ",
    icon: ""
  },
  {
    name: "Sustainably",
    url: "/career/sustainably",
    when: "2020 - 2021",
    icon: ""
  },
  {
    name: "Kerve",
    url: "/career/kerve",
    when: "2017 - 2020",
    icon: ""
  },
  {
    name: "Unicorn Training",
    url: "/career/unicorn",
    when: "2015 - 2017",
    icon: ""
  }
];

const freelancePages = [
  // {
  //   name: "Open Source",
  //   url: "/work/open-source",
  //   when: "2021",
  //   icon: ""
  // },
  {
    name: "Funko Animation Studios",
    url: "/work/funko",
    when: "2018",
    icon: ""
  }
];

const pageVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function Home() {
  return (
    <Page as={motion.main} variants={pageVariants}>
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

      <Theme name="pink">
        <JaggedEdge edge="top" shadow="dark" background>
          <Section>
            <Row>
              <Col column="1">
                <HomeItems title="Career" pages={workPages} />
              </Col>
              <Col column="2">
                <HomeItems title="Personal work" pages={freelancePages} />
              </Col>
            </Row>
          </Section>
        </JaggedEdge>
      </Theme>

      <Footer />
    </Page>
  );
}
