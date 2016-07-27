import {extend} from 'underscore';

export class Page {
  templateName: string;
  constructor(templateName:string, attrs={}) {
    this.templateName = templateName;
    for(name in attrs) {
      this[name] = attrs[name];
    }
  }

  set(attrs:any) {
    for(let name of attrs) {
      console.log(attrs);
      this[name] = attrs[name];
    }
  }
}
