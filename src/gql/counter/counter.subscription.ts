import { gql } from "@apollo/client";

export const INCREMET_SUBSCRIPTION = gql`
  subscription IncrementCountSubscribe {
    incrementCount
  }
`;