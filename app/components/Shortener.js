var React = require('react');
var PropTypes = React.PropTypes;

function ResponseMessage(props) {
    return ( //Todo: tighter conditional handling of JSX.
        <div>
            <div style={props.status === 'error' ? {display: 'block'} : {display: 'none'}} >
                Bad URL format. Try 'http://www.google.com'
            </div>
            <div style={props.status === 'success' ? {display: 'block'} : {display: 'none'}} >
                <a href={props.shortened} target="_blank">{props.shortened}</a>
            </div>
        </div>
    )
};

function Shortener(props) {
    return (
        <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                Url Shortener                
            </div>
            <div className="mdl-card__supporting-text">                
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input 
                        onChange={props.onUpdateUrl}
                        value={props.url}
                        className="mdl-textfield__input" 
                        type="text" 
                        id="fullUrl" />
                    <label className="mdl-textfield__label" htmlFor="fullUrl">Full Url</label>
                </div>
                <ResponseMessage status={props.status} shortened={props.shortened} />                 
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                    onClick={props.onSubmitUrl}
                    disabled={props.status == 'loading'}>
                    {props.status == 'loading' ? 'Loading...' : 'Get Link'}                    
                </a>                                
            </div>
        </div>
    )
}

module.exports = Shortener;