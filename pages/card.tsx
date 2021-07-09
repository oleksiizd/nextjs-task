import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";

import { IAnswerType } from "../components/types";
import { getUserData } from "../services/getUserData";
import { useRouter } from "next/router";

interface Props {
  answerr: IAnswerType;
}

export default function Cardpage(props: Props) {
  const answerrr = JSON.stringify(props.answerr, null, 2);
  const { localizedLastName, id, localizedFirstName, ...rest } = props.answerr;
  const { profilePicture, ...rest2 } = rest;
  const { displayImage } = profilePicture;

  return (
    <div className={styles.container}>
      <Head>
        <title>Card page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Card Page</h1>
      <p>{answerrr}</p>
      <p>{localizedLastName}</p>
      <p>{id}</p>
      <p>{localizedFirstName}</p>
      <p>{displayImage}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.query.code as string;
  const path = context.req.headers.referer as string;

  const answer = getUserData(code, path);

  return {
    props: { answerr: await answer },
  };
};
