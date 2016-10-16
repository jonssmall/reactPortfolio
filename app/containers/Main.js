var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <h2>Jon Small Portfolio</h2>          
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;