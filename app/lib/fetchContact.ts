import { TypedDocumentNode, gql } from "@apollo/client";
import { IContact } from "./definitions";

interface Data {
  contact: {
    data: {
      attributes: IContact;
    };
  };
}

const FETCH_CONTACT: TypedDocumentNode<Data> = gql`
  query {
    contact {
      data {
        attributes {
          email
          address {
            building
            campus
            room
            street
          }
        }
      }
    }
  }
`;

export { FETCH_CONTACT };
