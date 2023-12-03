import { gql, TypedDocumentNode } from "@apollo/client";
import { IAcademicCircle } from "./definitions";

interface Data {
  academicCircles: {
    data: {
      attributes: IAcademicCircle;
    }[];
  };
}

interface Variables {
  slug: string;
}

const FETCH_ACADEMIC_CIRCLE: TypedDocumentNode<Data, Variables> = gql`
  query academicCircles($slug: String) {
    academicCircles(filters: { name: { contains: $slug } }) {
      data {
        attributes {
          name
          description
          logo {
            data {
              attributes {
                name
                url
              }
            }
          }
          faculty {
            data {
              attributes {
                abbreviation
                name
              }
            }
          }
          email
          address {
            building
            campus
            room
            street
          }
          social_media {
            type
            url
          }
        }
      }
    }
  }
`;

export { FETCH_ACADEMIC_CIRCLE };
