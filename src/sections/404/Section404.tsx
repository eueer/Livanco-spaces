import React, { Suspense } from "react";

/** Generated from the Framer section "404".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Section404() {
  return (
    <section className="framer-wbyq1j" data-framer-name="404">
      <div className="framer-110v3r7">
        <div className="framer-150lcrk" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
          <h1 className="framer-text framer-styles-preset-1hmylfv" data-styles-preset="DIXkfZ4dn" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-e24b3554-434b-4aec-9504-2f68f4c2a1fa, rgb(41, 37, 36))" }}>
            {"Oops!"}
          </h1>
        </div>
        <div className="framer-8hyzyv" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
          <p className="framer-text framer-styles-preset-xdjos" data-styles-preset="Eh5uSNVIQ" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-f396c592-2cf9-43e2-856a-e32e99778fb2, rgb(120, 113, 108))" }}>
            {"It looks like that page doesn't exist. Please check the URL and try again."}
          </p>
        </div>
      </div>
      <Suspense fallback={null}>
        <div className="framer-w5pe9r-container">
          <div className="ssr-variant hidden-dlzlhr hidden-5d6ijo">
            <Suspense fallback={null}>
              <a className="framer-52E61 framer-dokJh framer-fbOCo framer-s6zx84 framer-v-1ex1nqd framer-12es2up" data-framer-name="Secondary" data-border="true" href="./#hero" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-76a81fff-e210-43fc-b999-cb834fd70387, rgb(168, 162, 158))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-c97c8eb3-e993-480b-abf3-efbe2ec7c67d, rgb(250, 250, 249))", borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}>
                <div className="framer-idtyek" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                  <p className="framer-text framer-styles-preset-1d5k22k" data-styles-preset="sLgHYmHsM" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9)))" }}>
                    {"Back to Home"}
                  </p>
                </div>
                <svg className="framer-pDEfD framer-1ge99j9" role="presentation" viewBox="0 0 24 24" style={{ "--2dcig2": "1.2", "--c0riqa": "var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9))" }}>
                  <use href="#2503973916" />
                </svg>
              </a>
            </Suspense>
          </div>
          <div className="ssr-variant hidden-1k2y4ml">
            <Suspense fallback={null}>
              <a className="framer-52E61 framer-dokJh framer-fbOCo framer-s6zx84 framer-v-1ex1nqd framer-12es2up" data-framer-name="Secondary" data-border="true" href="./#hero" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-76a81fff-e210-43fc-b999-cb834fd70387, rgb(168, 162, 158))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-c97c8eb3-e993-480b-abf3-efbe2ec7c67d, rgb(250, 250, 249))", borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}>
                <div className="framer-idtyek" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                  <p className="framer-text framer-styles-preset-1d5k22k" data-styles-preset="sLgHYmHsM" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9)))" }}>
                    {"Back to home"}
                  </p>
                </div>
                <svg className="framer-pDEfD framer-1ge99j9" role="presentation" viewBox="0 0 24 24" style={{ "--2dcig2": "1.2", "--c0riqa": "var(--token-f02d06af-ed9d-4b5c-a8eb-c21bd9c9d9c2, rgb(12, 10, 9))" }}>
                  <use href="#2503973916" />
                </svg>
              </a>
            </Suspense>
          </div>
        </div>
      </Suspense>
    </section>
  );
}
