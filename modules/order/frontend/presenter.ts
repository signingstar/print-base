import { DataFormat } from "./components/data_format";
import PrintData from "../../../config/print_combination";
export default PrintData;

export let printableData = function(type: string) {
  const innerSet = PrintData[type];
  let innerList: DataFormat[] = [];

  for(let key in innerSet) {
    innerList.push({id: key, value: innerSet[key].label});
  }

  return innerList;
}
