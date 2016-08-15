export interface DataFormat {
  id: string;
  value: string;
}

export interface States {
  type: string;
  size: string;
  quantity: string;
  material: string;
}

export interface StateObject {
  type?: string;
  size?: string;
  material?: string;
  quantity?: string;
  files: File[];
}

export interface PrintItemProps {
  id: string;
  selectedItem: string;
  onChange: (id: any, value: any) => void;
  states: States;
}
