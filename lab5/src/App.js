import React from "react"

export default class App extends React.Component{
  state = {
    loading: true,
    cars: null,
  };
  async componentDidMount(){
    const url = "http://localhost:8000/cars#"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({car: data.cars[0],loading:false})
    
    
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
        <div>{this.state.car.fname}</div>
      </div>
    )
  }
}