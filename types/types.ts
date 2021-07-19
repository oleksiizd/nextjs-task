import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { AxiosResponse } from "axios";

export interface IAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, {}, {}>;
}

export interface IAnswerType {
  profilePicture: {
    displayImage: string;
    ["displayImage~"]: { elements: IElements[] };
  };

  firstName?: {
    localized: { en_US: string };
    preferredLocale: { country: string; language: string };
  };
  lastName?: {
    localized: { en_US: string };
    preferredLocale: { country: string; language: string };
  };
  id?: string;
  localizedFirstName: string;
  localizedLastName: string;
}

interface IElements {
  identifiers: Iidentifiers[];
}
interface Iidentifiers {
  identifier: string;
}

export interface IData {
  access_token: string;
  expires_in: number;
}

export interface IInitState {
  data: IAnswerType;
}