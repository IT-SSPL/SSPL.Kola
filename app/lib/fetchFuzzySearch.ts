import { TypedDocumentNode, gql } from "@apollo/client";
import { IAcademicCircle, IFaculty } from "./definitions";

export interface DataFuzzySearch {
  search: {
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

const FETCH_FUZZY_SEARCH: TypedDocumentNode<DataFuzzySearch, Variables> = gql`
  query ($query: String!) {
    search(query: $query) {
      academicCircles(filters: { publishedAt: { notNull: true } }) {
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

export { FETCH_FUZZY_SEARCH };
