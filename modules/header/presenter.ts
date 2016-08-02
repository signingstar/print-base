import { each, pick, omit } from "underscore";

let navigationConfig = require("../../config/top_nav_config.json");

interface MenuElement {
  "id": string,
  "displayText": string,
  "url": string,
  "anchorId": string,
  "subElements": [MenuElement],
  "display": boolean
};

let flattenConfig = () => {
  let navHash:any = {};
  let flatten = function(nestedConfig:MenuElement[]) {
    each(nestedConfig, function(elem) {
      let subElem = elem.subElements;

      if(subElem && subElem.length) {
        navHash[elem.id] = omit(elem, 'subElements');
        flatten(subElem);
      } else {
        navHash[elem.id] = elem;
      }
    });
  };

  flatten(navigationConfig);
  return navHash;
};

let origConfig = navigationConfig;
let flatConfig = flattenConfig();

export let customConfig = function(id:string, ...fields:string[]) {
    if(fields.length === 0) {
      return flatConfig[id];
    }
    return pick(flatConfig[id], ...fields);
};
export let navConfig = origConfig;
