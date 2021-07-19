import { GetServerSideProps } from "next";
import { getUserData } from "../services/getUserData";
import { getAccessToken } from "../services/getAccessToken";
import CardPageContent from "../components/CardComp";
import { IStoreState } from "../types/types";
import { initializeStore } from "../redux/store";
import { setData } from "../redux/slices/reducer";

export default function Cardpage() {
  return <CardPageContent />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authorizationCode = context.query.code as string;

  const accessToken = await getAccessToken(authorizationCode);

  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  const requestUserData = await getUserData(accessToken);

  const userDataState: IStoreState = {
    localizedFirstName: requestUserData.localizedFirstName,
    localizedLastName: requestUserData.localizedLastName,
    profilePicture: requestUserData.profilePicture,
  };

  dispatch(setData(userDataState));
  return {
    props: { initialReduxState: reduxStore.getState() },
  };
};
