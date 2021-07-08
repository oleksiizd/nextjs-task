export interface IAnswerType {
  profilePicture: {
    displayImage: string;
  };
  firstName: {
    localized: { en_US: string };
    preferredLocale: { country: string; language: string };
  };
  lastName: {
    localized: { en_US: string };
    preferredLocale: { country: string; language: string };
  };
  id: string;
  localizedFirstName: string;
  localizedLastName: string;
}

export interface Code {
  code: string;
}

export interface AccessToken {
  status: number;
  statusText: string;
  headers: {};
  data: {
    access_token: string;
    expires_in: number;
  };
  config: {};
}

export interface initialState {
  accessTokenStoreData: string;
  userStoreData: {};
}
