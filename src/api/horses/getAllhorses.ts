import { executeGraphql } from "@/api/executeGraphql";
import { HorsesGetAllDocument } from "@/gql/graphql";

export const getHorses = async () => {
  const graphqlResponse = await executeGraphql({
    query: HorsesGetAllDocument,
  });

  return graphqlResponse.horses?.data;
};
