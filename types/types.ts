import { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

export interface IAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, {}, {}>;
}

export interface ILinkedinUserResponse {
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

export interface ILinkedinAuthData {
  access_token: string;
  expires_in: number;
}

export interface IUserDataState {
  lastName: string;
  firstName: string;
  picture: string;
}

export interface IRootState {
  userData: IUserDataState;
}
