let format = require("url").format;

export function getUri(action: string, refUrl: string) : string {
  let pathname = "/" + action;
  if (!refUrl) {
    return pathname;
  }
  return format({
    pathname: pathname,
    query: {ref_url:refUrl}
  });
};
