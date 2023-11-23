import { executeGraphql } from "@/api/executeGraphql";
import { HorseGetByNameDocument } from "@/gql/graphql";

export const getHorseByName = async (name: string) => {
  const graphqlResponse = await executeGraphql({
    query: HorseGetByNameDocument,
    variables: { name },
  });

  return graphqlResponse.horse;
};
