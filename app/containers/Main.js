var React = require('react');
var NavLink = require('../components/NavLink');

var Main = React.createClass({
  render: function () {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">      
            <div className="mdl-layout__drawer">    
                <nav className="mdl-navigation">                    
                    <NavLink path="/" iconName="home" text="Home" />
                    <NavLink path="/tictactoe" iconName="home" text="TicTacToe" />                                     
                </nav>
            </div>
            <main className="mdl-layout__content mdl-color--grey-100">
                {this.props.children}
            </main>
        </div>
    )
  }
})

module.exports = Main;

