import { TYPE_CATEGORY, TYPE_SIZE, TYPE_SURFACE, TYPE_COAT, TYPE_FOLD, TYPE_PAPER_QUALITY } from "./actions";

class OrderPresenter {
  constructor(data) {
    this.data = data;
  }

  fetchSpecificCategory(type) {
    return this.data[type];
  }

  fetchSpecificFilterByCategory(filtercategory, filterValue, category) {
    return this.fetchSpecificCategory(filtercategory)[filterValue][category];
  }

  fetchSpecificCategoryAndId(type, id) {
    const innerSet = this.fetchSpecificCategory(type);

    return innerSet[id];
  }

  fetchLabelForCategoryAndId(type, id) {
    if(id) {
      return this.fetchSpecificCategoryAndId(type, id).label;
    }
  }

  printableData(type) {
    const innerSet = this.fetchSpecificCategory(type);

    let innerList = [];

    for(let key in innerSet) {
      innerList.push({id: key, value: innerSet[key].label});
    }

    return innerList;
  }

  consolidateList(sourceList, lookupList) {
    if(sourceList && lookupList){
      sourceList.forEach((item, index) => {
        if(lookupList.indexOf(item) === -1) {
          sourceList.splice(index, 1);
        }
      });
    }

    return sourceList;
  }

  printableDataWithFilter(category, filterTypes) {
    const innerSet = this.fetchSpecificCategory(category);
    let listForCategory;
    let {type, size, material, coat, fold, paperQuality} = filterTypes;

    // console.log(`category:${category} | filterTypes:${JSON.stringify(filterTypes)}`);

    if(type) {
      listForCategory = this.fetchSpecificFilterByCategory(TYPE_CATEGORY, type, category).slice();
    }

    // console.log(`listForCategory1:${JSON.stringify(listForCategory)}`);
    if(size) {
      let localList = this.fetchSpecificFilterByCategory(TYPE_SIZE, size, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(material) {
      let localList = this.fetchSpecificFilterByCategory(TYPE_SURFACE, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(coat) {
      let localList = this.fetchSpecificFilterByCategory(TYPE_COAT, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(fold) {
      let localList = this.fetchSpecificFilterByCategory(TYPE_FOLD, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    if(paperQuality) {
      let localList = this.fetchSpecificFilterByCategory(TYPE_PAPER_QUALITY, material, category);
      listForCategory = this.consolidateList(listForCategory, localList);
    }

    let innerList = [];

    for(let key in innerSet) {
      if(!listForCategory || listForCategory.indexOf(key) > -1) {
        innerList.push({id: key, value: innerSet[key].label});
      }
    }

    return innerList;
  }
}

export default OrderPresenter;
