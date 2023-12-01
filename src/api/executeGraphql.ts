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
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw TypeError("GRAPHQL_ENDPOINT is not defined");
  }
  if (!process.env.NEXT_PUBLIC_STRAPI_TOKEN) {
    throw TypeError("STRAPIE_TOKEN is not defined");
  }

  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    cache,
    next,
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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
