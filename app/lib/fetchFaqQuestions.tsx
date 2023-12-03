import { TypedDocumentNode, gql } from "@apollo/client";
import { IFaqQuestion } from "./definitions";

interface Data {
  faqQuestions: {
    data: {
      attributes: IFaqQuestion;
    }[];
  };
}

const FETCH_FAQ_QUESTIONS: TypedDocumentNode<Data> = gql`
  query {
    faqQuestions {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;

export { FETCH_FAQ_QUESTIONS };
