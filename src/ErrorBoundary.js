import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { haError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBOundary caught error", error, info);

    //   componentDidUpdate() {
    // if (this.state.redirect) {
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      <Redirect to="/" />;
    } else if (this.state.haError) {
      return (
        <h1>
          Listing has error. <Link to="/"> Click</Link> for HomePage
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
