interface PageObject {
  [name: string]: any;
}

export class Page {
  constructor(private templateName: string, attrs={}) {
    this.set(attrs);
  }

  set(attrs: PageObject) {
    for(let key in attrs) {
      this[key] = attrs[key];
    }
  }
}
