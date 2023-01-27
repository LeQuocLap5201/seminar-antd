import { useState } from "react";

const useCopyToClipboard = (text) => {
  const [copiedText, setCopiedText] = useState();

  const copy = async (text, callback) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      callback();
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};

export default useCopyToClipboard;
