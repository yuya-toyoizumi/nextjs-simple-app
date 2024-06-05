import { GraphQLClient } from "graphql-request";
import { useMemo } from "react";

export const useGraphqlApiClient = (): GraphQLClient => {
  const graphqlApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

  if (!graphqlApiUrl) {
    throw new Error("GraphQL API URL is not defined in environment variables");
  }

  const client: GraphQLClient = useMemo(
    () => new GraphQLClient(graphqlApiUrl),
    [graphqlApiUrl],
  );

  return client;
};
