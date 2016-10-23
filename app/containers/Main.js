var React = require('react');
var NavLink = require('../components/NavLink');
var css = require('../style.css');

var Main = React.createClass({
  render: function () {
    return (
        <div className="mdl-layout mdl-js-layout">                  
            <main>
                <div className="page-content">                    
                    {this.props.children}                    
                </div>
            </main>
        </div>
    )
  }
})

module.exports = Main;

