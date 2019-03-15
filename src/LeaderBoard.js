
import React, { Component } from 'react';
export class LeaderBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }
  componentDidMount() {
    this.props.profiles.sort((a, b) =>
      b.score - a.score
    );
    this.setState(this.props.profiles)
    console.log(this.state.profiles);
  }

  render() {
    const display = this.props.profiles.map(detail => {
      return (
        <tr key={detail.id}>
          <td>{detail.name}</td>
          <td>{detail.score}</td>
        </tr>
      )
    });
    return (
      <div>
        <br></br>
        <div className="card">
        <br></br> <h5 className="text-center">
            LeaderBoard
          </h5><br></br>
        </div>
        <div className="container ">
        <table className=" table text-white">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {display}
          </tbody>
        </table></div>
      </div>
    )
  }
}


export default LeaderBoard