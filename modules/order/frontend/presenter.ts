import { DataFormat } from "./data_types/data_format";
import PrintData from "../../../config/print_combination";
import { CATEGORY_TYPE, CATEGORY_SIZE, CATEGORY_MATERIAL } from "./actions";

interface NestedMap {
  [name: string]: any;
}

let fetchSpecificCategory = function(type: string) {
  const innerSet: NestedMap = PrintData[type];

  return innerSet;
}

let fetchSpecificFilterByCategory = function(filtercategory: string, filterValue: string, category: string) {
  return fetchSpecificCategory(filtercategory)[filterValue][category];
}

let fetchAndDuplicateSpecificFilterByCategory = function(filtercategory: string, filterValue: string, category: string) {
  return fetchSpecificFilterByCategory(filtercategory, filterValue, category).slice();
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

interface PropList {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
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
  let {type, size, material} = filterTypes;

  if(type) {
    listForCategory = fetchAndDuplicateSpecificFilterByCategory(CATEGORY_TYPE, type, category);
  }

  if(size) {
    let localList: string[] = fetchSpecificFilterByCategory(CATEGORY_SIZE, size, category);
    listForCategory = consolidateList(listForCategory, localList);
  }

  if(material) {
    let localList: string[] = fetchSpecificFilterByCategory(CATEGORY_MATERIAL, material, category);
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
