export default async function HorsePage({
  params,
}: {
  params: { slug: string };
}) {
  return <>{params.slug}</>;
}
