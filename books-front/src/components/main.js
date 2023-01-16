import React from "react";
import axios from "axios";



export default class MainBooks extends React.Component {

constructor(props) {
    super(props);
    this.state = {value:'', search:'', books:[]};
// 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.value).then((response) => {this.setState({search : response.data.items}); this.setState({books:response.data.items})});
    // console.log(this.state.search)
    console.log(this.state.books)

    event.preventDefault();
  }

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

       
      </div>
    );
  }


}