import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    }
    styles={
        fontsize:30  
    }
    addBadge(){
        let classes="badge m-2 badge-" ; 
       return classes+=this.state.count===0?"warning":"primary"
    }

  formatCount(){
      console.log(this.state.count)
      const {count}= this.state
      return count ===0 ? " Zero":count
  }
  handleclick(){
      console.log("it is  clicked " , this.state.count) ; 
      alert("Clicked")
  }

    render() {
        return (<div>
           <span  style={{ fontSize:30 }} className={this.addBadge()} > {this.formatCount()}</span>
           <button onClick={this.handleclick} style={{ fontSize:30 }} className="btn btn-sm btn-primary m-2">Click Me</button>
        </div>);
    }
}

export default Counter;