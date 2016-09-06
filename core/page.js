export class Page {
  constructor(templateName, attrs ={}) {
    this.templateName = templateName;
    this.set(attrs);
  }

  set(attrs) {
    for(let key in attrs) {
      this[key] = attrs[key];
    }
  }
}
