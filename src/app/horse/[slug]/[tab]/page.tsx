import { getTabsByTabSlugAndHorseSlug } from "@/api/tabs/getTabsByTabSlugAndHorseSlug";
import { type TabSlugProps } from "@/module/tabs/common/types";
import { TabsPanel } from "@/module/tabs/components/TabPanel";

export default async function TabPage({
  params,
}: {
  params: { tab: TabSlugProps; slug: string };
}) {
  const content = await getTabsByTabSlugAndHorseSlug({
    tabSlug: params.tab,
    horseSlug: params.slug,
  });

  if (content?.length === 0) {
    return <div>There is no content</div>;
  }
  return (
    <section className="flex-1 mx-10">
      <TabsPanel data={content} currentTab={params.tab} />
    </section>
  );
}
