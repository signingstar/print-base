let format = require('url').format;

export function getUri(action:string, ret_url:string) : string {
  let pathname = "/" + action;
  if (!ret_url) {
    return pathname;
  }
  return format({
    pathname: pathname,
    query: {ret_url}
  });
};
