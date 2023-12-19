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
    academicCircles(filters: { slug: { contains: $slug } }) {
      data {
        attributes {
          name
          description
          president
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
          subsections {
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
                slug
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
