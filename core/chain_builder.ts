import { clone, extend, object, reduce } from 'underscore';
import { Request, Response } from "express";

export function ChainBuilder () {
  let chainObject = {
    chain: new Array(),

    register: function(name: string, fn: (ctx: any, req: Request, res: Response)=>any) {
      return chainObject.chain.push([name, fn]);
    },

    execute: function(defaultCtx = {}, ...args: any[]) {
      let ctx = clone(defaultCtx);
      let iterator = function(ctx: {}, handler: any) {
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
