import {getUri} from "../session/form_uri";

export let presenter = function(retUrl: string) {
  return getUri('signup', retUrl);
};
