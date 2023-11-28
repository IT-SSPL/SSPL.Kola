export interface IFaculty {
  name: string;
  abbreviation: string;
  logo: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    };
  };
}

export interface ISocialMedia {
  type: string;
  url: string;
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
  social_media: ISocialMedia[];
}
