import { getRenderedPage } from "../../../src/render";
import View from "../../../src/views/LegalPagesPrivacyPolicyPage";

export const dynamic = "force-static";

export async function GET() {
  const html = await getRenderedPage("legal-pages-privacy-policy.html", View);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
