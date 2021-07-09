import axios from "axios";

export async function getUserData(code: string, path: string) {
  const pathcard = path + "card";

  const Token = await axios.get(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      params: {
        grant_type: "authorization_code",
        code: code,
        client_id: "785jez5b2sszz3",
        client_secret: "jVWgwjpVD90zlz6c",
        redirect_uri: pathcard,
      },
    }
  );
  const answer = await axios.get("https://api.linkedin.com/v2/me", {
    headers: {
      Authorization: `Bearer ${Token.data.access_token}`,
    },
  });
  return answer.data;
}
