import { type TypedDocumentString } from "@/gql/graphql";

export async function executeGraphql<TResult, TVariables>({
  query,
  variables,
  cache,
  next,
  headers,
}: {
  query: TypedDocumentString<TResult, TVariables>;
  cache?: RequestCache;
  headers?: HeadersInit;
  next?: NextFetchRequestConfig | undefined;
} & (TVariables extends { [key: string]: never }
  ? { variables?: never }
  : { variables: TVariables })): Promise<TResult> {
  if (!process.env.APP_SERVER_URL) {
    throw TypeError("APP_SERVER_URL is not defined");
  }
  if (!process.env.GRAPHQL_ENDPOINT) {
    throw TypeError("GRAPHQL_ENDPOINT is not defined");
  }
  if (!process.env.STRAPI_TOKEN) {
    throw TypeError("STRAPIE_TOKEN is not defined");
  }

  const GRAPHQL_URL = `${process.env.APP_SERVER_URL}${process.env.GRAPHQL_ENDPOINT}`;

  const res = await fetch(GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
    next,
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  type GraphQLResponse<T> =
    | { data?: undefined; errors: { message: string }[] }
    | { data: T; errors?: undefined };

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
}
