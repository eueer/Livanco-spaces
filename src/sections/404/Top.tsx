import React, { Suspense } from "react";

/** Generated from the Framer section "Top".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Top() {
  return (
    <div className="framer-1ybv7q2" data-framer-name="Top">
      <div className="framer-x13qs6">
        <Suspense fallback={null}>
          <div className="framer-1cs7e0k" data-framer-name="Name and logo">
            <Suspense fallback={null}>
              <a as="a" className="framer-3t67us framer-oionxw" data-border="true" data-framer-name="Logo" href="./" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-8c5ac018-8806-4487-a55b-975a2f765f5c, rgb(231, 229, 228))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
                <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                  <img decoding="async" width="128" height="128" src="/assets/img/126061b314076eac.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                </div>
              </a>
            </Suspense>
            <div className="framer-1ld6bp2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-e24b3554-434b-4aec-9504-2f68f4c2a1fa, rgb(41, 37, 36))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
              <p dir="auto" className="framer-text" style={{ "--font-selector": "R0Y7SW5zdHJ1bWVudCBTZXJpZi1yZWd1bGFy", "--framer-font-family": "\"Instrument Serif\", \"Instrument Serif Placeholder\", serif", "--framer-font-size": "18px", "--framer-letter-spacing": "0.02em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e24b3554-434b-4aec-9504-2f68f4c2a1fa, rgb(41, 37, 36)))" }}>
                <strong className="framer-text">
                  {"Livanco Spaces"}
                </strong>
              </p>
            </div>
          </div>
        </Suspense>
      </div>
      <div className="framer-ix3exj" data-framer-name="Icon" data-highlight="true" tabIndex={0}>
        <div className="framer-1von7g9" data-framer-name="Bottom" style={{ backgroundColor: "var(--token-f396c592-2cf9-43e2-856a-e32e99778fb2, rgb(120, 113, 108))", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "none" }} />
        <div className="framer-13bfcyf" data-framer-name="Top" style={{ backgroundColor: "var(--token-f396c592-2cf9-43e2-856a-e32e99778fb2, rgb(120, 113, 108))", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transform: "none" }} />
      </div>
    </div>
  );
}
