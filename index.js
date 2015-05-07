import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hasProfile: false
    };
  }

  onSubmitHandler(e){
    e.preventDefault();
    var firstNameNode = this.refs.firstName.getDOMNode();
    var firstName = firstNameNode.value;

    var lastNameNode = this.refs.lastName.getDOMNode();
    var lastName = lastNameNode.value;

    this.showProfile(firstName, lastName);
  }

  componentDidMount(){
    this.refs.firstName.getDOMNode().focus();
  }

  showProfile(first, last){
    var profile = `First Name: ${first}, Last Name: ${last}`;
    this.setState({ hasProfile: true, profile: profile });
  }

  render() {
    var body;

    if(this.state.hasProfile){
      body = this.state.profile;
    }else{
      body = (<form onSubmit={this.onSubmitHandler.bind(this)}>
        <p>
          <input ref="firstName" placeholder="First Name" />
        </p>
        <p>
          <input ref="lastName" placeholder="Last Name" />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>);
    }
    return (<div> {body} </div>);
  }
}

React.render(<App />, document.getElementById('app'))
