export interface answerType {
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
