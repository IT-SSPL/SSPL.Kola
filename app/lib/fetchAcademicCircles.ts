import { TypedDocumentNode, gql } from "@apollo/client";
import { IAcademicCircle, IFaculty } from "./definitions";

export interface DataAcademicCircles {
  academicCircles: {
    data: {
      attributes: IAcademicCircle;
    }[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
  faculties: {
    data: {
      attributes: IFaculty;
    }[];
  };
}

const FETCH_ACADEMIC_CIRCLES: TypedDocumentNode<DataAcademicCircles> = gql`
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
    faculties {
      data {
        attributes {
          abbreviation
          name
        }
      }
    }
  }
`;

export { FETCH_ACADEMIC_CIRCLES };
