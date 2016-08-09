import printApp from '../../modules/order/frontend/reducers';
import { expect } from 'chai';

describe('Reducer', function() {
  describe('#printState', () => {
      it('should return empty state', () => {
        let state = printApp({}, {type: 'RESET'}).selectionState;
        expect(state).to.be.empty;
        expect(state.type).to.not.exist;
      });

      it('should set type when state is empty', () => {
        let state = printApp({}, {type: 'SET_TYPE', value: 'mugs'}).selectionState;
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.is.undefined;
      });

      it('should have all keys present even when state is empty', () => {
        let state = printApp({}, {type: 'SET_TYPE', value: 'mugs'}).selectionState;
        expect(state).to.have.all.keys('type', 'size', 'quantity', 'material');
      });

      it('should set size when state is empty', () => {
        let state = printApp({}, {type: 'SET_SIZE', value: 'axb'}).selectionState;
        expect(state).to.have.property('type').and.is.undefined;
        expect(state).to.have.property('size').and.equal('axb');
      });

      it('should set size when state is not empty', () => {
        let state = printApp({selectionState:{type: 'mugs'}}, {type: 'SET_SIZE', value: 'axb'}).selectionState;
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.have.property('quantity').and.is.undefined;
        expect(state).to.have.property('material').and.is.undefined;
      });

      it('should set size when state is not empty', () => {
        let state = printApp({selectionState:{type: 'mugs', size: 'axb'}}, {type: 'SET_QUANTITY', value: '100'}).selectionState;
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.have.property('quantity').and.equal('100');
        expect(state).to.have.property('material').and.is.undefined;
      });

      it('should deep comparison pass', () => {
        let state = printApp({selectionState:{type: 'mugs', size: 'axb', quantity: '100'}}, {type: 'SET_MATERIAL', value: 'latex'}).selectionState;
        expect(state).to.deep.equal({type: 'mugs', size: 'axb', quantity: '100', material: 'latex'});
      });

  });
});
