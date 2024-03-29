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

export interface IAchievement {
  title: string;
  description: string;
}

export interface IContact {
  email: string;
  address: {
    building: string;
    campus: string;
    room: string;
    street: string;
  };
}

export interface IFooter {
  name: string;
  phone_number: string;
  street: string;
  email: string;
  logo?: {
    data: {
      attributes: {
        name: string;
        url: string;
      };
    };
  };
  social_media?: ISocialMedia[];
}

export interface IAcademicCircle {
  name: string;
  description: string;
  president?: string;
  logo?: {
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
  subsections: {
    data: {
      attributes: {
        name: string;
        description: string;
        logo?: {
          data: {
            attributes: {
              name: string;
              url: string;
            };
          };
        };
        slug: string;
      };
    }[];
  };
  email: string;
  address: {
    building: string;
    campus: string;
    room: string;
    street: string;
  };
  social_media?: ISocialMedia[];
  achievements?: IAchievement[];
}

export interface IFaqQuestion {
  question: string;
  answer: string;
}
