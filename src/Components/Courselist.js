import react, { Component } from 'react'
import NavBar from './NavBar'
import '../course.css'
import image from '../images/PY.png'

class CourseList extends Component {
  render() {
    return this.props.course.map((c, index) => {

      return (
        <react.Fragment>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={c.image} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{c.title}</h5>
                  <p class="card-text">{c.desc}.</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    <small class=" price">{c.price}</small>
                  </p>

                  <p class="card-text">
                    <button
                      onClick={() => this.props.handleCount(index)}
                      class=" price addbtn"
                    >
                      Add to cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </react.Fragment>
      )
    })
  }
}

export default CourseList
