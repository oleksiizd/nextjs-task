import axios, { AxiosResponse } from "axios";
import { IData } from "../types/types";

export async function getUserData(linkedinAccessToken: AxiosResponse<IData>) {
  const requestUserData = await axios.get(
    "https://api.linkedin.com/v2/me?projection=(localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))",
    {
      headers: {
        Authorization: `Bearer ${linkedinAccessToken.data.access_token}`,
      },
    }
  );
  return requestUserData.data;
}
