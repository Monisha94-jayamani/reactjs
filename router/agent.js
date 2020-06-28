import React from "react";

class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/agents")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* <ul>
          {this.state.agentlist.map((agent, index) => (
            <li key={index}>
              {agent.name.first} {agent.name.last} {agent.mobile} {agent.email}
            </li>
          ))}
        </ul> */}
        <table>
          <thead>
            <tr>
              <th>FIrst Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Agent Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.agentlist.map((agent, index) => (
              <tr key={index}>
                <td>{agent.name.first}</td>
                <td>{agent.name.last}</td>
                <td>{agent.mobile}</td>
                <td>{agent.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Agent;
