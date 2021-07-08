import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { AccessToken, Code } from "../components/types";
import { accessTokenDataAdd } from "../redux/slices/dataSlice";

export async function getAccessToken(code: string) {
  const dispatch = useDispatch();
  const Token = await axios.get(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      params: {
        grant_type: "authorization_code",
        code: code,
        client_id: "785jez5b2sszz3",
        client_secret: "jVWgwjpVD90zlz6c",
        redirect_uri: "http://localhost:3000/cardpage",
      },
    }
  );
  dispatch(accessTokenDataAdd(Token.data.access_token));
}
