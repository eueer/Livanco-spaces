import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/ProjectsHeritageTerraceModularKitchenPage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("projects-heritage-terrace-modular-kitchen.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
