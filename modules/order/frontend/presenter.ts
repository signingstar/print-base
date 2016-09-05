import { DataFormat } from "./data_types/data_format";
import PrintData from "../../../config/print_combination";
import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_FOLD } from "./actions";

interface NestedMap {
  [name: string]: any;
}

interface PropList {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
  coat?: string;
  fold?: string;
}

let fetchSpecificCategory = function(type: string) {
  const innerSet: NestedMap = PrintData[type];

  return innerSet;
}

let fetchSpecificFilterByCategory = function(filtercategory: string, filterValue: string, category: string) {
  return fetchSpecificCategory(filtercategory)[filterValue][category];
}

export let fetchSpecificCategoryAndId = function(type: string, id: string) {
  const innerSet = fetchSpecificCategory(type);

  return innerSet[id];
}

export let fetchLabelForCategoryAndId = function(type: string, id: string): string {
  if(id) {
    return fetchSpecificCategoryAndId(type, id).label;
  }
}

export let printableData = function(type: string) {
  const innerSet = fetchSpecificCategory(type);

  let innerList: DataFormat[] = [];

  for(let key in innerSet) {
    innerList.push({id: key, value: innerSet[key].label});
  }

  return innerList;
}

let consolidateList = function(sourceList: string[], lookupList: string[]) {
  if(sourceList && lookupList){
    sourceList.forEach((item, index) => {
      if(lookupList.indexOf(item) === -1) {
        sourceList.splice(index, 1);
      }
    });
  }

  return sourceList;
}

export let printableDataWithFilter = function(category: string, filterTypes: PropList) {
  const innerSet = fetchSpecificCategory(category);
  let listForCategory: string[];
  let {type, size, material, coat, fold} = filterTypes;

  if(type) {
    listForCategory = fetchSpecificFilterByCategory(TYPE_CATEGORY, type, category).slice();
  }

  if(size) {
    let localList: string[] = fetchSpecificFilterByCategory(TYPE_SIZE, size, category);
    listForCategory = consolidateList(listForCategory, localList);
  }

  if(material) {
    let localList: string[] = fetchSpecificFilterByCategory(TYPE_SURFACE, material, category);
    listForCategory = consolidateList(listForCategory, localList);
  }

  if(coat) {
    let localList: string[] = fetchSpecificFilterByCategory(TYPE_COAT, material, category);
    listForCategory = consolidateList(listForCategory, localList);
  }

  if(fold) {
    let localList: string[] = fetchSpecificFilterByCategory(TYPE_FOLD, material, category);
    listForCategory = consolidateList(listForCategory, localList);
  }

  let innerList: DataFormat[] = [];

  for(let key in innerSet) {
    if(!listForCategory || listForCategory.indexOf(key) > -1) {
      innerList.push({id: key, value: innerSet[key].label});
    }
  }

  return innerList;
}
