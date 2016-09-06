import { each, pick, omit } from "underscore";

export const origConfig = require("../../../config/top_nav_config.json");

let flattenConfig = () => {
  let navHash = {};
  let flatten = function(nestedConfig) {
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

export const customConfig = function(id, ...fields) {
  if(fields.length === 0) {
    return flatConfig[id];
  }
  return pick(flatConfig[id], ...fields);
};

export const isInInnerConfig = (category, id) => {
  return origConfig.find((config) => {
    if(category === config.id) {
      const subElements = config.subElements;
      const actualId = config.subElements.find((config) => {
        return config.id === id;
      });

      return actualId ? actualId : undefined;
    }
  });
}
