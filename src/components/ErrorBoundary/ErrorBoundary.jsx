import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            color: "#d9534f",
            padding: "1rem",
          }}
        >
          <h2>⚠ Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
          <pre style={{ color: "#555", fontSize: "0.9rem" }}>
            {this.state.error?.message}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
