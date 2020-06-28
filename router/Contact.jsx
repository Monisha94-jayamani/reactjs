import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
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
            {this.state.contactlist.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name.first}</td>
                <td>{contact.name.last}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
