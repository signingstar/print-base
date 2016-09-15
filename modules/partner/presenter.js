import { getUriWithRefUrl, getUriWithCheck } from "user-sessions/lib/session/form_uri";

const presenter = function(retUrl, isLogged?) {
  let uriWithRef = getUriWithRefUrl('signup', retUrl);
  let parsedUri = getUriWithCheck(isLogged, retUrl);

  return {uriWithRef, parsedUri};
};

export default presenter;
