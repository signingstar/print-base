import 'core-js/shim';
import selectionState, { StateObject } from '../../../modules/order/frontend/reducers/selection_state';
import { expect } from 'chai';

const defaultState:StateObject = {
  updateComponents: []
}

describe('Reducer', function() {
  describe('#printState', () => {
      it('should return empty category objects', () => {
        let state = selectionState(defaultState, {type: 'RESET'});
        expect(state).to.have.property('updateComponents');
        expect(state).to.not.have.keys('type', 'size', 'material', 'quantity');
      });

      it('should set type when state is empty', () => {
        let state = selectionState(defaultState, {type: 'SET_TYPE', value: 'mugs'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.is.undefined;
      });

      it('should have all keys present when type is set', () => {
        let state = selectionState(defaultState, {type: 'SET_TYPE', value: 'mugs'});
        expect(state).to.have.all.keys('type', 'size', 'quantity', 'material', 'updateComponents');
      });

      it('should set size when state is empty', () => {
        let state = selectionState(defaultState, {type: 'SET_SIZE', value: 'axb'});
        expect(state).to.not.have.property('type');
        expect(state).to.have.property('size').and.equal('axb');
      });

      it('should set size when state is not empty', () => {
        let state = selectionState({type: 'mugs', updateComponents:[]}, {type: 'SET_SIZE', value: 'axb'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.not.have.property('quantity');
        expect(state).to.not.have.property('material');
      });

      it('should set quantity when state is not empty', () => {
        let state = selectionState({type: 'mugs', size: 'axb', updateComponents:[]}, {type: 'SET_QUANTITY', value: '100'});
        expect(state).to.have.property('type').and.equal('mugs');
        expect(state).to.have.property('size').and.equal('axb');
        expect(state).to.have.property('quantity').and.equal('100');
        expect(state).to.not.have.property('material');
      });

      it('should deep comparison pass', () => {
        let state = selectionState({type: 'mugs', size: 'axb', quantity: '100', updateComponents:[]}, {type: 'SET_MATERIAL', value: 'latex'});
        expect(state).to.deep.equal({type: 'mugs', size: 'axb', quantity: '100', material: 'latex', updateComponents: ['material', 'quantity']});
      });
  });
});
