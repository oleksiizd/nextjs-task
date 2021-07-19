import axios, { AxiosResponse } from "axios";
import { ILinkedinUserResponse, ILinkedinAuthData } from "../types/types";

export async function getUserData(
  linkedinAccessToken: AxiosResponse<ILinkedinAuthData>
) {
  const requestUserData: AxiosResponse<ILinkedinUserResponse> = await axios.get(
    "https://api.linkedin.com/v2/me?projection=(localizedFirstName,localizedLastName,profilePicture(displayImage~:playableStreams))",
    {
      headers: {
        Authorization: `Bearer ${linkedinAccessToken.data.access_token}`,
      },
    }
  );
  const linkedInImageDirectPath =
    requestUserData.data.profilePicture["displayImage~"].elements[1]
      .identifiers[0].identifier;
  return { ...requestUserData.data, profilePicture: linkedInImageDirectPath };
}
