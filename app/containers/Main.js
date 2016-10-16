var React = require('react');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header :{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: 5,
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{margin: 0}}>Jon Small Portfolio</h2>          
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;