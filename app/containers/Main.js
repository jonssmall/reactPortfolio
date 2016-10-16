var React = require('react');
var NavLink = require('../components/NavLink');

var Main = React.createClass({
  render: function () {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">      
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">js.js</span>
                <nav className="mdl-navigation">                    
                    <NavLink path="/" iconName="home" text="Home" />
                    <NavLink path="/tictactoe" iconName="home" text="TicTacToe" />                                     
                </nav>
            </div>
            <main className="mdl-layout__content">
                <div className="page-content">
                    {this.props.children}
                </div>
            </main>
        </div>
    )
  }
})

module.exports = Main;

