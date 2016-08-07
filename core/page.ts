interface PageObject {
  [name: string]: any;
}

export class Page {
  [name: string]: any;
  constructor(private templateName: string, attrs: PageObject ={}) {
    this.set(attrs);
  }

  set(attrs: PageObject) {
    for(let key in attrs) {
      this[key] = attrs[key];
    }
  }
}
