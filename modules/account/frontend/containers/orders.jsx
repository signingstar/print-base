import React from "react"
import {connect} from "react-redux"
import { spring, presets } from "react-motion"

import Orders from "../components/orders"
import { viewOrders, ordersUpdate } from "../actions"

export const statusMapping = {
  initiated: "Initiated",
  in_process: "In Progress",
  confirmed: "Confirmed"
}

class OrdersContainer extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.getDefaultStyles = this.getDefaultStyles.bind(this)
    this.getStyles = this.getStyles.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      value: '',
      selected: 'all'
    }
  }

  handleChange({target: {value}}) {
    this.setState({value});
  }

  handleSelect(e) {
    this.setState({selected: e.value})
  }

  // actual animation-related logic
  getDefaultStyles() {
    const { orders } = this.props
    return orders.map(order => ({data: order, key: order.id.toString(), style: {height: 0, opacity: 1}}))
  }

  getStyles() {
    const { orders } = this.props
    const { value, selected } = this.state;
    return orders.filter(({email, first_name, last_name='', status}) => {
      return (email.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
      `${first_name} ${last_name}` .toUpperCase().indexOf(value.toUpperCase()) >= 0) &&
      (!selected || selected === status || selected === 'all')
    })
    .map((order, i) => {
      return {
        data: order,
        key: order.id.toString(),
        style: {
          height: spring(50, presets.gentle),
          opacity: spring(1, presets.gentle),
        }
      }
    })
  }

  willEnter() {
    return {
      height: 0,
      opacity: 1,
    }
  }

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    }
  }

  componentDidMount() {
    const { onOrderReceive, orders } = this.props

    viewOrders(({res}) => onOrderReceive(res))
  }

  render() {
    let { orders, statusList } = this.props

    return (
      <Orders
        orders={orders}
        handleChange={this.handleChange}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
        getStyles={this.getStyles}
        getDefaultStyles={this.getDefaultStyles}
        value={this.state.value}
        statusList={statusList}
        handleSelect={this.handleSelect}
        selected={this.state.selected}
      />
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  const { ordersState} = store
  let statusList = []
  ordersState.forEach(order => {
    if(statusList.length === 0 || statusList.findIndex(status => order.status === status.value) === -1) {
      statusList.push({value: order.status, label: statusMapping[order.status]})
    }
  })
  statusList.unshift({value: 'all', label: 'Status: Show All'})

  return {
    orders: ordersState,
    statusList

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderReceive: (orders) => {
      dispatch(ordersUpdate(orders))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer)
