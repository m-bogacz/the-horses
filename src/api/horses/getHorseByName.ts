import { executeGraphql } from "@/api/executeGraphql";
import { type HorseEntity, HorseGetByNameDocument } from "@/gql/graphql";

export const getHorseByName = async (slug: string) => {
  const graphqlResponse = await executeGraphql({
    query: HorseGetByNameDocument,
    variables: { slug },
  });

  return graphqlResponse.horses?.data[0] as HorseEntity;
};
