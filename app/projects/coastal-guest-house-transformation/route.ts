import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/ProjectsCoastalGuestHouseTransformationPage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("projects-coastal-guest-house-transformation.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
