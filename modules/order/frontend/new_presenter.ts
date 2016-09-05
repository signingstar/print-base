import { DataFormat } from "./data_types/data_format";
import PrintData from "../../../config/print_combination";
import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_FOLD, TYPE_PAPER_QUALITY } from "./actions";

class OrderPresenter {
  constructor(private data: NestedMap) {
    //data = PrintData[type];
  }

  fetchSpecificCategory(type: string) {
    return this.data[type];
  }

  fetchSpecificFilterByCategory(filtercategory: string, filterValue: string, category: string) {
    return this.fetchSpecificCategory(filtercategory)[filterValue][category];
  }

  fetchSpecificCategoryAndId(type: string, id: string) {
    const innerSet = this.fetchSpecificCategory(type);

    return innerSet[id];
  }

  fetchLabelForCategoryAndId(type: string, id: string): string {
    if(id) {
      return this.fetchSpecificCategoryAndId(type, id).label;
    }
  }

  printableData(type: string) {
    const innerSet = this.fetchSpecificCategory(type);

    let innerList: DataFormat[] = [];

    for(let key in innerSet) {
      innerList.push({id: key, value: innerSet[key].label});
    }

    return innerList;
  }

  consolidateList(sourceList: string[], lookupList: string[]) {
    if(sourceList && lookupList){
      sourceList.forEach((item, index) => {
        if(lookupList.indexOf(item) === -1) {
          sourceList.splice(index, 1);
        }
      });
    }

    return sourceList;
  }

  printableDataWithFilter(category: string, filterTypes: PropList) {
    const innerSet = this.fetchSpecificCategory(category);
    let listForCategory: string[];
    let {type, size, material, coat, fold, paperQuality} = filterTypes;

    // console.log(`category:${category} | filterTypes:${JSON.stringify(filterTypes)}`);

    if(type) {
      listForCategory = this.fetchSpecificFilterByCategory(TYPE_CATEGORY, type, category).slice();
    }

    // console.log(`listForCategory1:${JSON.stringify(listForCategory)}`);
    if(size) {
      let localList: string[] = this.fetchSpecificFilterByCategory(TYPE_SIZE, size, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(material) {
      let localList: string[] = this.fetchSpecificFilterByCategory(TYPE_SURFACE, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(coat) {
      let localList: string[] = this.fetchSpecificFilterByCategory(TYPE_COAT, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(fold) {
      let localList: string[] = this.fetchSpecificFilterByCategory(TYPE_FOLD, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(paperQuality) {
      let localList: string[] = this.fetchSpecificFilterByCategory(TYPE_PAPER_QUALITY, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    let innerList: DataFormat[] = [];

    for(let key in innerSet) {
      if(!listForCategory || listForCategory.indexOf(key) > -1) {
        innerList.push({id: key, value: innerSet[key].label});
      }
    }

    return innerList;
  }
}

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
  paperQuality?: string;
}

export default OrderPresenter;
