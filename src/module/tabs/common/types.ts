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
