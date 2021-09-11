import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 15vw;
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ahmad Taha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title> Ahmad Taha</Title>
    </div>
  );
};

export default Home;
