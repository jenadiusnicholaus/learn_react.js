import react, { Component } from 'react'
import NavBar from './Components/NavBar'
import CourseList from './Components/Courselist'
import image1 from './images/py2.jpeg'
import image2 from './images/dart.png'
import image3 from './images/flutter.jpeg'

// import imagee from './images/py2.jpeg'

class App extends Component {
  state = {
    count: 0,
  }
  // handleIncrement = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   })
  // }
  handleCount = (index) => {

    this.setState({
      count: this.state.count + index

    })
  }
  render() {
    const toturial = [
      {
        title: 'Python course for Beginner',
        desc: 'This i most rwquested course ever',
        price: '2000 Tsh',
        image:`${image1}`,
      },
      {
        title: 'Django course for Beginner',
        desc: 'This i most rwquested course ever',
        price: '2000 Tsh',
        image: `${image2}`,
      },
      {
        title: 'Dart course for Beginner',
        desc: 'This i most rwquested course ever',
        price: '2000 Tsh',
        image: `${image2}`,
      },
      {
        title: 'flutter course for Beginner',
        desc: 'This i most rwquested course ever',
        price: '2000 Tsh',
        image: `${image3}`,
      },
    ]

    return (
      <div className="container">
        <NavBar countValue={this.state.count} />
        <CourseList handleCount={this.handleCount} course={toturial} />
      </div>
    )
  }
}

export default App
