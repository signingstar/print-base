import profileState from '../../../modules/account/frontend/reducers/profile'
import { expect, should } from 'chai'

const defaultState = {
  loaded: false
}

const details = {
  profile: {
    data: {
      first_name: 'anil',
      last_name: 'keshari',
      email: 'abc@xyz.com',
      phone_number: '420420'
    }
  }
}

const address = {
    "id":10,"address_line1":"qq","address_line2":"ww","landmark":"222","city":"ee","state":"rr",
    "country":"India","zipcode":44,"active":true,"category":"primary"
  }

let previousState = []

describe('Reducer', function() {
  before(() => {
    // let details = {profile: {data: {first_name: 'anil'}}}
  })

  describe('#Profile when state is not set', () => {
    it('should set profile data', () => {
      let state = profileState(defaultState, {type: 'UPDATE_ALL', details})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      let tempState = {
        "loaded":false,
        "data": details.profile.data
      }
      expect(state).to.deep.equal(tempState)
      previousState.push(state)
    })

    it('should add address', () => {
      let state = profileState(previousState[0], {type: 'ADDRESS_ADD', details: address})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(1)
      expect(state.address[0]).to.deep.equal(address)
      previousState.push(state)
    })

    it('should set address', () => {
      let state = profileState(previousState[0], {type: 'ADDRESS_SET', details: [address]})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(1)
      expect(state.address[0]).to.have.property('address_line1').and.equal('qq')
      expect(state.address[0]).to.have.property('zipcode').and.equal(44)
      expect(state.address[0]).to.deep.equal(address)
      previousState.push(state)
    })

    it('should update address', () => {
      const newAddress = {
          "id":10,"address_line1":"newQQ","address_line2":"ww","landmark":"222","city":"ee","state":"rr",
          "country":"India","zipcode":444,"active":true,"category":"primary"
        }
      let state = profileState(previousState[1], {type: 'ADDRESS_UPDATE', details: newAddress})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(1)
      expect(state.address[0]).to.have.property('address_line1').and.equal('newQQ')
      expect(state.address[0]).to.have.property('zipcode').and.equal(444)
      expect(state.address[0]).to.deep.equal(newAddress)
      previousState.push(state)
    })

    it('should add additional address', () => {
      const newAddress = {
          "id":11,"address_line1":"newQQQ","address_line2":"ww","landmark":"2222","city":"eee","state":"rrr",
          "country":"India","zipcode":4444,"active":true,"category":"primary"
        }
      let state = profileState(previousState[1], {type: 'ADDRESS_ADD', details: newAddress})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(2)
      expect(state.address[0]).to.deep.equal(newAddress)
      expect(state.address[1]).to.deep.equal(address)
      expect(state.address[1]).to.have.property('id').and.equals(10)
      expect(state.address[0]).to.have.property('id').and.equals(11)
      previousState.push(state)
    })

    it('should delete address and none will be left', () => {
      let state = profileState(previousState[2], {type: 'ADDRESS_DELETE', details: '10'})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(0)
      previousState.push(state)
    })

    it('should delete address and 1 will be left', () => {
      let state = profileState(previousState[previousState.length-2], {type: 'ADDRESS_DELETE', details: '10'})
      expect(state).to.have.property('data').to.have.property('first_name').and.equal('anil')
      expect(state).to.have.property('address').with.length(1)
      expect(state.address[0]).to.have.property('address_line1').and.equal('newQQQ')
    })
  })
})
