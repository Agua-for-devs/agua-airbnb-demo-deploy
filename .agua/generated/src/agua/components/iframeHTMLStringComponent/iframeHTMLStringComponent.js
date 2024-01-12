import React from 'react';

export default function IframeHTMLStringComponent({
  allow = "",
  allowfullscreen = false,
  width = "560px",
  height = "315px",
  sourcedoc = '<html><head><title>Agua Example</title></head><body>Agua</body></html>',
  title = 'Agua',
}) {
  if (allowfullscreen) {
    return (
      <iframe style={{ width: width, height: height }} srcdoc={sourcedoc} title={title} frameborder="0" allow={allow} allowFullScreen></iframe>
    );
  } else {
    return (
      <iframe style={{ width: width, height: height }} srcdoc={sourcedoc} title={title} frameborder="0" allow={allow}></iframe>
    );
  }
};
