import { TypedDocumentNode, gql } from "@apollo/client";
import { IAcademicCircle } from "./definitions";

interface Data {
  academicCircles: {
    data: {
      attributes: IAcademicCircle;
    }[];
  };
}

const FETCH_ACADEMIC_CIRCLES: TypedDocumentNode<Data> = gql`
  query {
    academicCircles {
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
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

export { FETCH_ACADEMIC_CIRCLES };
