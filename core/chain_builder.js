import { clone, extend, object, reduce } from 'underscore';
import { Request, Response } from "express";

const ChainBuilder = () => {
  let chainObject = {
    chain: new Array(),

    register: (name, fn) => chainObject.chain.push([name, fn]),

    execute: (defaultCtx = {}, ...args) => {
      let ctx = clone(defaultCtx);
      const iterator = (ctx, handler) => {
        let out:{};

        try {
          out = handler[1](ctx, ...args);
        } catch (e) {
          throw e;
        }

        return extend(ctx, object([[handler[0], out]]));
      };

      return reduce(chainObject.chain, iterator, ctx);
    }
  }

  return chainObject;
};

export default ChainBuilder;
