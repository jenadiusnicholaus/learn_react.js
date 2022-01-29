import React, { Component } from 'react'

import '../cart.css'

class Cart extends Component {
  render() {
    console.log(this.props)
    return (
      <button
      
        type="button"
        className="btn btn-default position-relative cart"
      >
        Cart
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {this.props.countValue}
          <span class="visually-hidden">unread messages</span>
        </span>
      </button>
    )
  }
}

export default Cart
