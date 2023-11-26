import { TypedDocumentNode, gql } from "@apollo/client";
import { IFaculty } from "./definitions";

interface Data {
  faculties: {
    data: {
      attributes: IFaculty;
    }[];
  };
}
const FETCH_FACULTIES: TypedDocumentNode<Data> = gql`
  query {
    faculties {
      data {
        attributes {
          abbreviation
          name
          logo {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { FETCH_FACULTIES };
