export interface IFaculty {
  name: string;
  abbreviation: string;
}

export interface IAcademicCircle {
  name: string;
  description: string;
  logo: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  slug: string;
  faculty: {
    data: {
      attributes: IFaculty;
    };
  };
  address: {
    building: string;
    campus: string;
    room: string;
    street: string;
  };
  social_media: {
    type: string;
    url: string;
  }[];
}
