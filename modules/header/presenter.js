import * as Config from "./helpers/config";

export let {origConfig, customConfig, isInInnerConfig} = Config;

export const presenter = ({cookies}) => {
  let isLogged = cookies['isLogged'];

  if(isLogged) {
    return {isLogged};
  }
}
