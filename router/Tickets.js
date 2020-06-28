import React from "react";

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketlist: [],
      contactlist: [],
      agentlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/tickets")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ticketlist: data });

        return fetch("http://localhost:4040/contacts");
      })
      .then((data) => data.json())
      .then((data2) => {
        this.setState({ contactlist: data2 });

        return fetch("http://localhost:4040/agents");
      })
      .then((data3) => data3.json())
      .then((dataa3) => {
        this.setState({ agentlist: dataa3 });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  getNames = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.name.first;
      else return acc;
    }, " ");
    return res;
  };
  getlast = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.name.last;
      else return acc;
    }, " ");
    return res;
  };
  getnumber = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.mobile;
      else return acc;
    }, " ");
    return res;
  };
  getemail = (agentid) => {
    const res = this.state.agentlist.reduce((acc, val) => {
      if (val.id === agentid) return val.email;
      else return acc;
    }, " ");
    return res;
  };
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Agent Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ticketlist.map((value, index) => (
              <tr key={index}>
                <td>{this.getNames(value.agentId)}</td>
                <td>{this.getlast(value.agentId)}</td>
                <td>{this.getnumber(value.agentId)}</td>
                <td>{this.getemail(value.agentId)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Tickets;
