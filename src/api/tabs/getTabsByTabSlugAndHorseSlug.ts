import { executeGraphql } from "../executeGraphql";
import {
  TabsFarrieriesGetBySlugHorseQueryDocument,
  TabsNewsGetBySlugHorseQueryDocument,
  TabsVaccinationsGetBySlugHorseQueryDocument,
  TabsVeterinariansGetBySlugHorseQueryDocument,
} from "@/gql/graphql";
import { type TabSlugProps } from "@/module/tabs/common/types";

export const getNewsTabsByHorse = async (horseSlug: string) => {
  const graphqlResponse = await executeGraphql({
    query: TabsNewsGetBySlugHorseQueryDocument,
    variables: { slug: horseSlug },
    next: {
      tags: ["news"],
    },
  });

  return graphqlResponse.news?.data;
};

export const getFarrieriesTabsByHorse = async (horseSlug: string) => {
  const graphqlResponse = await executeGraphql({
    query: TabsFarrieriesGetBySlugHorseQueryDocument,
    variables: { slug: horseSlug },
    next: {
      tags: ["farrieries"],
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });

  return graphqlResponse.farrieries?.data;
};
export const getVaccinationsTabsByHorse = async (horseSlug: string) => {
  const graphqlResponse = await executeGraphql({
    query: TabsVaccinationsGetBySlugHorseQueryDocument,
    variables: { slug: horseSlug },
    next: {
      tags: ["vaccinations"],
    },
  });

  return graphqlResponse.vaccinations?.data;
};
export const getVeterinarianTabsByHorse = async (horseSlug: string) => {
  const graphqlResponse = await executeGraphql({
    query: TabsVeterinariansGetBySlugHorseQueryDocument,
    variables: { slug: horseSlug },
    next: {
      tags: ["veterinarians"],
    },
    cache: "no-store",
  });

  return graphqlResponse.veterinarians?.data;
};

export const getTabsByTabSlugAndHorseSlug = async ({
  tabSlug,
  horseSlug,
}: {
  tabSlug: TabSlugProps;
  horseSlug: string;
}) => {
  switch (tabSlug) {
    case "news":
      return getNewsTabsByHorse(horseSlug);
    case "veterinarians":
      return getVeterinarianTabsByHorse(horseSlug);
    case "vaccinations":
      return getVaccinationsTabsByHorse(horseSlug);
    case "farrieries":
      return getFarrieriesTabsByHorse(horseSlug);
    default:
      return getNewsTabsByHorse(horseSlug);
  }
};
