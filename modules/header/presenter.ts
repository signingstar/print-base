import { each, pick, omit } from "underscore";

export const origConfig = require("../../config/top_nav_config.json");

interface MenuElement {
  id: string,
  displayText: string,
  url: string,
  anchorId: string,
  subElements: [MenuElement],
  display: boolean
};

interface SubMenuElement {
  id: string;
  anchorId: string;
  displayText: string;
}

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

  flatten(origConfig);
  return navHash;
};

const flatConfig = flattenConfig();

export const customConfig = function(id:string, ...fields:string[]) {
  if(fields.length === 0) {
    return flatConfig[id];
  }
  return pick(flatConfig[id], ...fields);
};

export const isInInnerConfig = (category: string, id: string) => {
  return origConfig.find((config: MenuElement) => {
    if(category === config.id) {
      const subElements = config.subElements;
      const actualId = config.subElements.find((config) => {
        return config.id === id;
      });

      return actualId ? actualId : undefined;
    }
  });
}
