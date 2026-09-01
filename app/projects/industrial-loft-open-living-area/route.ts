import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/ProjectsIndustrialLoftOpenLivingAreaPage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("projects-industrial-loft-open-living-area.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
