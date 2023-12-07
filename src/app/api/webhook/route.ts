import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
  const body: unknown = await request.json();
  console.log(body);

  revalidatePath(`/farrieries`);

  revalidateTag("farrieries");

  return new Response(JSON.stringify({ message: "hello" }), { status: 204 });
}
