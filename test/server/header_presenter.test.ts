import {origConfig, customConfig} from '../../modules/header/presenter';
import { expect } from 'chai';

describe('Header Presenter', function() {
  describe('#origConfig', () => {
      it('should return all configs', () => {
          var result : number = origConfig.length;
          expect(result).to.be.equal(7);
      });
      it('should return proper subElements', () => {
          var result : number = origConfig[1].subElements.length;
          expect(result).to.be.equal(3);
      });
  });
  describe('#customConfig', () => {
      it('should return selected Config', () => {
          var result = customConfig('l-2-1', 'id', 'displayText');
          expect(result.id).to.be.equal('l-2-1');
          expect(result.displayText).to.be.equal('Business Cards');
          expect(result.internal_url).to.be.undefined;
      });
      it('should return all Config for a particular id', () => {
          var result = customConfig('l-2-1');
          expect(result.id).to.be.equal('l-2-1');
          expect(result.displayText).to.be.equal('Business Cards');
          expect(result.internal_url).to.be.equal('visiting_cards');
      });
  });
});
