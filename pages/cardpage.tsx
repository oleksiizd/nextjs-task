import { GetServerSideProps } from "next";
import { IAnswerType } from "../components/types";
import { getUserData } from "../services/getUserData";
import { getAccessToken } from "../services/getAccessToken";
import CardComp from "../components/CardComp";

interface Props {
  linkedinUserData: IAnswerType;
}

export default function Cardpage(props: Props) {
  return <CardComp props={props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authorizationCode = context.query.code as string;
  const hostString = context.req.headers.referer as string;

  const accessToken = await getAccessToken(authorizationCode, hostString);
  const requestUserData = await getUserData(accessToken);
  return {
    props: { linkedinUserData: requestUserData },
  };
};
