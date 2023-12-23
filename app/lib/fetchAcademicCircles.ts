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

interface Variables {
  query: string;
}

const FETCH_ACADEMIC_CIRCLES: TypedDocumentNode<
  DataAcademicCircles,
  Variables
> = gql`
  query ($query: String!) {
    academicCircles(
      filters: {
        parent_circle: { slug: null }
        and: [{ temporary_faculty: { containsi: $query } }]
      }
    ) {
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
    faculties(sort: "id") {
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
