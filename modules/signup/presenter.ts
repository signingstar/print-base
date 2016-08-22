import { getUriWithRefUrl, getUriWithCheck } from "../session/form_uri";

export let presenter = function(retUrl: string, isLogged?: boolean) {
  let uriWithRef = getUriWithRefUrl('signup', retUrl);
  let parsedUri = getUriWithCheck(isLogged, retUrl);

  return {uriWithRef, parsedUri};
};
