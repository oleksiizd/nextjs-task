import Head from "next/head";
import useStyles from "../404Comp/styles";
import { IAnswerType, ICardProps } from "../types";
import Link from "next/link";
import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Image from "next/image";

export default function CardPageContent({ props }: ICardProps) {
  const classes = useStyles();
  const stringifyLinkedinUserData = JSON.stringify(
    props.linkedinUserData,
    null,
    2
  );
  const { localizedLastName, localizedFirstName, profilePicture, ...rest } =
    props.linkedinUserData;
  const image =
    profilePicture["displayImage~"].elements[1].identifiers[0].identifier;
  return (
    <div>
      <Head>
        <title>Card page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.card}>
        <Card>
          <CardContent className={classes.cardContent}>
            <h1 className={classes.title}>LinkedIn Card</h1>
            <img className={classes.profilePicture} src={image} alt="avatar" />
            <Typography>First Name: {localizedFirstName}</Typography>
            <Typography>Last Name: {localizedLastName} </Typography>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
