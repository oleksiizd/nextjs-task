import { GetServerSideProps } from "next";
import { getUserData } from "../services/getUserData";
import { getAccessToken } from "../services/getAccessToken";
import CardPageContent from "../components/CardComp";
import { IAnswerType } from "../components/types";

export default function Cardpage(props: { linkedinUserData: IAnswerType }) {
  return <CardPageContent props={props} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authorizationCode = context.query.code as string;

  const accessToken = await getAccessToken(authorizationCode);
  const requestUserData = await getUserData(accessToken);
  return {
    props: { linkedinUserData: requestUserData },
  };
};
