import {clone, extend, reduce, object} from 'underscore';

module.exports = function() {
  let slice = [].slice;
  let chainObject = {
    chain: new Array(),
    execute: function() {
      let defaultCtx = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (defaultCtx == null) {
        defaultCtx = {};
      }

      let ctx = clone(defaultCtx);
      let iterator = function(ctx, handler) {
        let out;
        try {
          out = handler[1].apply(handler, [ctx].concat(slice.call(args)));
        } catch (e) {
          throw e;
        }
        return extend(ctx, object([[handler[0], out]]));
      };
      return reduce(chainObject.chain, iterator, ctx);
    },
    register: function(name, fn) {
      return chainObject.chain.push([name, fn]);
    }
  }

  return chainObject;
};
