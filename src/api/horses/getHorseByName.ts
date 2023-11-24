import { executeGraphql } from "@/api/executeGraphql";
import { HorseGetByNameDocument } from "@/gql/graphql";

export const getHorseByName = async (slug: string) => {
  const graphqlResponse = await executeGraphql({
    query: HorseGetByNameDocument,
    variables: { slug },
  });

  return graphqlResponse.horse;
};
