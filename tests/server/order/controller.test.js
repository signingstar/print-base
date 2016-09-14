import Controller from "../../../modules/order/controller";
import {modules, params} from "../controller_base";

describe('Order Controller', function() {
  let controller = Controller({modules: modules});
  let controllerAction = controller['main'];
  it('just blank test', ()=> {
    expect(true).to.be.true;
  })
});
