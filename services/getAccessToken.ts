import { IData } from "../components/types";
import instance from "../utils/getLinkedInAxiosInstance";

export async function getAccessToken(
  authorizationCode: string,
  hostString: string
) {
  const pathcard = hostString + "cardpage";

  const linkedinAccessToken = await instance.get<IData>(
    "oauth/v2/accessToken",
    {
      params: {
        grant_type: "authorization_code",
        code: authorizationCode,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
      },
    }
  );
  return linkedinAccessToken;
}
