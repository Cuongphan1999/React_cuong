import { Component } from 'react'
import Welcome from './Welcome-bootstrap'
export default class bootstrapLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: { email: '', password: '', isRemember: false },
            isVaild: false,
            isLoggedIn: false
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
      this.setState((state) => {
        const { form } = state
        form[event.target.name] = event.target.value
        return { form }
      }, () => this.checkValidForm())
    }
  handleChangeCheckbox = () => {
      this.setState((state) => {
        const { form } = state
        form.isRemember = !form.isRemember
        return { form }
      }, () => this.checkValidForm())
    }
  checkValidForm = () => {
      const { email, password } = this.state.form
      const value = email && password
      this.setState({ isVaild: value })
  }
  handleSubmit = () => {
      if (this.state.isVaild) {
          this.setStates({ isLoggedIn: true })
      }
  }
  handleLogout = () => {
      this.setState({ isLoggedIn: false})
  }
    render(){
        const { isLoggedIn, form} = this.state 
        if (isLoggedIn) return (<Welcome onlogOut = {this.handleLogout}/>)
        return (
            <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
        )
    }
}
