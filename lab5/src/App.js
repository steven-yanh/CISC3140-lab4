import React from "react"

export default class App extends React.Component{
  state = {
    loading: true,
    car: null,
    car2: null,
  };
  async componentDidMount(){
    const url = "http://localhost:8000/cars#"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({car: data.cars[0],loading:false})
    this.setState({car2: data.cars[1],loading:false})
    
  };


  render(){
    if(this.state.loading){
      return <div>loading cars...</div>

    }
    if(!this.state.car){
      return <div>didn't get the car</div>

    }
    return (
      
      <div>
        <table border = "1">
          <tr>
            <td>Car id</td>
            <td>first name</td>
            <td>last name</td>
            <td>make</td>
            <td>model</td>
            <td>year</td>
            <td>score</td>
          </tr>
          <tr>
            <td>{this.state.car.carid}</td>
            <td>{this.state.car.fname}</td>
            <td>{this.state.car.lname}</td>
            <td>{this.state.car.make}</td>
            <td>{this.state.car.model}</td>
            <td>{this.state.car.year}</td>
            <td>{this.state.car.score}</td>
          </tr>
          <tr>
          <td>{this.state.car2.carid}</td>
            <td>{this.state.car2.fname}</td>
            <td>{this.state.car2.lname}</td>
            <td>{this.state.car2.make}</td>
            <td>{this.state.car2.model}</td>
            <td>{this.state.car2.year}</td>
            <td>{this.state.car2.score}</td>
          </tr>
        </table>
      </div>
    )
  }
}