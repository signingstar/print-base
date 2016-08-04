import * as React from "react";
import { PrintType } from "./print_type";
import { PrintSize} from "./print_size";
import { SelectMaterials } from "./select_materials";
import { PrintQuantity } from "./print_quantity";
import { PrintPreview } from "./print_preview";
import { PrintEstimates } from "./print_estimates";

export class SectionBody extends React.Component<{}, {}> {
  constructor() {
    super();
    this.state = {
      type: null,
      size: null,
      materials: null,
      quantity: null,
      preview: null,
      estimates: null
    }
  }
  render () {
    return (
      <div className='main-section-body'>
        <PrintType />
        <PrintSize />
        <SelectMaterials />
        <PrintQuantity />
        <PrintPreview />
        <PrintEstimates />
      </div>
    )
  }
}
