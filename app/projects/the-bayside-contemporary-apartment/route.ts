import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/ProjectsTheBaysideContemporaryApartmentPage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("projects-the-bayside-contemporary-apartment.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
