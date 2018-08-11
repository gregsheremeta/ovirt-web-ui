import React from 'react'
import PropTypes from 'prop-types'

class GlobalErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    alert('global error')
    if (error) {
      this.setState({ hasError: true })
    }
    // You can also log the error to an error reporting service
    alert('global error')
  }

  render () {
    alert('render')
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

GlobalErrorBoundary.propTypes = {
  children: PropTypes.any,
}

export default GlobalErrorBoundary
