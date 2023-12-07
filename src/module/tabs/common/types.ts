export type TabSlugProps =
  | "news"
  | "veterinarians"
  | "vaccinations"
  | "farrieries"
  | "gallery"
  | "genealogy";

export type TabNameProps =
  | "News"
  | "Veterinarian"
  | "Vaccinations"
  | "Farriery"
  | "Gallery"
  | "Genealogy tree";

export type TabProps = { name: TabNameProps; slug: TabSlugProps };

export type DetailsProps = {
  attributes?: {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    date?: any;
    slug?: string | null | undefined;
    executedBy: string;
    description?: string | null | undefined;
  };
};
