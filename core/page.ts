import {extend} from 'underscore';

export class Page {
  constructor(private templateName:string, attrs={}) {
    this.set(attrs);
  }

  set(attrs:any) {
    for(let key in attrs) {
      this[key] = attrs[key];
    }
  }
}
