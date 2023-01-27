import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "./index.css";

export default function Code({ code, language = "javascript" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="code">
      <pre>
        <code className={`language-${language} copy-to-clipboard`}>{code}</code>
      </pre>
    </div>
  );
}
