import { DataFormat } from "./data_types/data_format";
import PrintData from "../../../config/print_combination";

interface NestedMap {
  [name: string]: any;
}

let fetchSpecificCategory = function(type: string) {
  const innerSet: NestedMap = PrintData[type];

  return innerSet;
}

export let fetchSpecificCategoryAndId = function(type: string, id: string) {
  const innerSet = fetchSpecificCategory(type);

  return innerSet[id];
}

export let fetchLabelForCategoryAndId = function(type: string, id: string) {
  return fetchSpecificCategoryAndId(type, id).label;
}

export let printableData = function(type: string) {
  const innerSet = fetchSpecificCategory(type);

  let innerList: DataFormat[] = [];

  for(let key in innerSet) {
    innerList.push({id: key, value: innerSet[key].label});
  }

  return innerList;
}
