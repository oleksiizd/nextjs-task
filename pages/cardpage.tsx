import { GetServerSideProps } from "next";
import { ICardProps } from "../components/types";
import { getUserData } from "../services/getUserData";
import { getAccessToken } from "../services/getAccessToken";
import CardPageContent from "../components/CardComp";

export default function Cardpage(props) {
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
