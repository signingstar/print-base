import printState from '../../modules/order/frontend/reducers/index';
import { expect } from 'chai';

describe('Reducer', function() {
  describe('#printState', () => {
      it('should return empty state', () => {
        expect(printState({}, {type: 'clear'})).to.be.empty;
      });

      it('should set type when state is empty', () => {
        let state = printState({}, {type: 'set', key: 'type', val: 'mugs'});
          expect(state).to.have.property('type').and.equal('mugs');
          expect(state).to.have.property('size').and.equal('');
      });

      it('should set size when state is empty', () => {
        let state = printState({}, {type: 'set', key: 'size', val: 'axb'});
          expect(state).to.have.property('type').and.is.undefined;
          expect(state).to.have.property('size').and.equal('axb');
      });

      it('should set size when state is not empty', () => {
        let state = printState({type: 'mugs'}, {type: 'set', key: 'size', val: 'axb'});
          expect(state).to.have.property('type').and.equal('mugs');
          expect(state).to.have.property('size').and.equal('axb');
          expect(state).to.have.property('quantity').and.is.undefined;
          expect(state).to.have.property('material').and.is.undefined;
      });

      it('should set size when state is not empty', () => {
        let state = printState({type: 'mugs', size: 'axb'}, {type: 'set', key: 'quantity', val: '100'});
          expect(state).to.have.property('type').and.equal('mugs');
          expect(state).to.have.property('size').and.equal('axb');
          expect(state).to.have.property('quantity').and.equal('100');
          expect(state).to.have.property('material').and.is.undefined;
      });

      it('should set size when state is not empty', () => {
        let state = printState({type: 'mugs', size: 'axb', quantity: '100'}, {type: 'set', key: 'material', val: 'latex'});
          expect(state).to.have.property('type').and.equal('mugs');
          expect(state).to.have.property('size').and.equal('axb');
          expect(state).to.have.property('quantity').and.equal('100');
          expect(state).to.have.property('material').and.equal('latex');
      });

  });
});
