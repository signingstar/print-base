import 'core-js/shim';
import selectionState from '../../modules/order/frontend/reducers/selection_state';
import { expect } from 'chai';

describe('Reducer', function() {
  describe('#printState', () => {
      it('should return empty state', () => {
        let state = selectionState({}, {type: 'RESET'});
        expect(state).to.be.empty;
        expect(state.type).to.not.exist;
      });

      it('should set type when state is empty', () => {
        let state = selectionState({}, {type: 'SET_TYPE', value: 'mugs'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.is.undefined;
      });

      it('should have all keys present even when state is empty', () => {
        let state = selectionState({}, {type: 'SET_TYPE', value: 'mugs'});
        expect(state).to.have.all.keys('type', 'size', 'quantity', 'material');
      });

      it('should set size when state is empty', () => {
        let state = selectionState({}, {type: 'SET_SIZE', value: 'axb'});
        expect(state).to.have.property('type').and.is.undefined;
        expect(state).to.have.property('size').and.equal('axb');
      });

      it('should set size when state is not empty', () => {
        let state = selectionState({type: 'mugs'}, {type: 'SET_SIZE', value: 'axb'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.have.property('quantity').and.is.undefined;
        expect(state).to.have.property('material').and.is.undefined;
      });

      it('should set size when state is not empty', () => {
        let state = selectionState({type: 'mugs', size: 'axb'}, {type: 'SET_QUANTITY', value: '100'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.have.property('quantity').and.equal('100');
        expect(state).to.have.property('material').and.is.undefined;
      });

      it('should deep comparison pass', () => {
        let state = selectionState({type: 'mugs', size: 'axb', quantity: '100'}, {type: 'SET_MATERIAL', value: 'latex'});
        expect(state).to.deep.equal({type: 'mugs', size: 'axb', quantity: '100', material: 'latex'});
      });

  });
});
