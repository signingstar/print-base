import { DataFormat } from "./components/data_format";
export let PrintData = require("../../../config/print_combination.json");

export let printableData = function(type: string) {
  const innerSet = PrintData[type];
  let innerList: DataFormat[] = [];

  for(let key in innerSet) {
    innerList.push({id: key, value: innerSet[key].label});
  }

  return innerList;
}
