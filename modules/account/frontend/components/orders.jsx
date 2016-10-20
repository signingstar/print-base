import React from "react"
import Link from "react-router/Link"
import { TransitionMotion } from "react-motion"
import Select from "react-select"

import { statusMapping } from "../containers/orders"

const Orders = ({orders, handleChange, willEnter, willLeave, getStyles, getDefaultStyles, value, statusList, handleSelect, selected}) => {
  return (
    <div className='orders-section'>
      <h3>Total Orders: {orders.length}</h3>
      <div className='fields row'>
        <div className='field'>
          <input
            className='large-field'
            autoFocus={true}
            placeholder='Start typing to filter by Name or Email Address'
            value={value}
            onChange={handleChange}
          />
        </div>
        <Select
          name='status'
          options={statusList}
          onChange={handleSelect}
          className='status'
          value={selected}
          searchable={false}
          clearable={false}
        />
      </div>
      {
        orders.length > 0
        ?
          <TransitionMotion
            defaultStyles={getDefaultStyles()}
            styles={getStyles()}
            willLeave={willLeave}
            willEnter={willEnter}
          >
            {styles =>
              <ul className='order-list'>
                {styles.map(({key, style, data: {email, first_name, last_name, status}}) =>
                  <li key={key} style={style} className='order-entry'>
                    <div className='order-entry-item order-id'>
                      Order <a href={`/orders/${key}`}>#<span>{key}</span></a>
                    </div>
                    <div className='order-entry-item name'><span>{first_name} {last_name} ({email})</span></div>
                    <div className='order-entry-item status'>Status: <span>{statusMapping[status]}</span></div>
                  </li>
                )}
              </ul>
            }
          </TransitionMotion>
        :
        <ul className='order-list'>
          {orders.map((order, index) =>
            <li key={index} className='order-entry'>
              <div className='order-entry-item order-id'>Order Id: <span></span></div>
              <div className='order-entry-item name'>Customer Name: <span></span></div>
              <div className='order-entry-item email'>Email Id: <span></span></div>
            </li>
          )}
        </ul>
      }
    </div>
  )
}

export default Orders
