import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hasProfile: false
    };
  }

  registrationSubmit(firstName, lastName){
    var profile = `First Name: ${firstName}, Last Name: ${lastName}`;
    this.setState({ hasProfile: true, profile: profile });
  }

  render() {
    var body;

    if(this.state.hasProfile){
      body = this.state.profile;
    }else{
      body = <RegistrationForm onSubmitHandler={this.registrationSubmit.bind(this)} />
    }
    return (<div> {body} </div>);
  }
}

class RegistrationForm extends React.Component {

  componentDidMount(){
    this.refs.firstName.getDOMNode().focus();
  }

  submit(e){
    e.preventDefault();
    var firstNameNode = this.refs.firstName.getDOMNode();
    var firstName = firstNameNode.value;

    var lastNameNode = this.refs.lastName.getDOMNode();
    var lastName = lastNameNode.value;

    this.props.onSubmitHandler(firstName, lastName);

    firstNameNode.value = '';
    lastNameNode.value = '';
  }

  render(){
      return (<form onSubmit={this.submit.bind(this)}>
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
}

React.render(<App />, document.getElementById('app'))
