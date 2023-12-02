import { TypedDocumentNode, gql } from "@apollo/client";
import { IFooter } from "./definitions";

interface Data {
  footer: {
    data: {
      attributes: IFooter;
    };
  };
}

const FETCH_FOOTER: TypedDocumentNode<Data> = gql`
  query {
    footer {
      data {
        attributes {
          name
          phone_number
          street
          email
          logo {
            data {
              attributes {
                name
                url
              }
            }
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

export { FETCH_FOOTER };
