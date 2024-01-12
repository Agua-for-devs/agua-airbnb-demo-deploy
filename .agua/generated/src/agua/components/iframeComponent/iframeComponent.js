import React from 'react';

export default function IframeComponent({
  allow = "",
  allowfullscreen = false,
  width = "560px",
  height = "315px",
  sourceURL = 'www.agua.app',
  title = 'Agua',
}) {
  if (allowfullscreen) {
    return (
      <iframe style={{ width: width, height: height }} src={sourceURL} title={title} frameborder="0" allow={allow} allowFullScreen></iframe>
    );
  } else {
    return (
      <iframe style={{ width: width, height: height }} src={sourceURL} title={title} frameborder="0" allow={allow}></iframe>
    );
  }
};
