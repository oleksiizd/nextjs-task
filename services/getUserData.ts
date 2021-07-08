import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IAnswerType } from "../components/types";
import { getData } from "../redux/selectors/getStoredData";
import { userDataAdd } from "../redux/slices/dataSlice";

export async function getUserData() {
  const Token = useSelector(getData);
  const dispatch = useDispatch();
  const answer = await axios.get("https://api.linkedin.com/v2/me", {
    headers: {
      Authorization: `Bearer ${Token.data.access_token}`,
    },
  });
  dispatch(userDataAdd(Token));
}
