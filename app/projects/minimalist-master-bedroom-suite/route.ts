import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/ProjectsMinimalistMasterBedroomSuitePage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("projects-minimalist-master-bedroom-suite.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
