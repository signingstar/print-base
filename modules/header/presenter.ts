let navigationConfig = require('../../config/navigation-config.json');
import {each, pick, omit} from 'underscore';

let origConfig = navigationConfig;
let flatConfig = flattenConfig();

function flattenConfig() {
  let navHash = {};
  let flatten = function(nestedConfig:any) {
    each(nestedConfig, function(elem:any) {
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

module.exports = {
  customConfig: function(id:string, ...fields:string[]) {
    if(fields.length === 0) {
      return flatConfig[id];
    }
    return pick(flatConfig[id], ...fields);
  },
  navConfig: origConfig
}
