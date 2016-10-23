var React = require('react');
var Shortener = require('../components/Shortener');
var axios = require('axios');

let buildApiCall = (url) => {
    return `https://jon-url-shortener.herokuapp.com/urls/new?fullUrl=${url}`;
}

let getShortenedUrl = (url) => {  
    let api = buildApiCall(url);

    return axios.get(api)
        .then(result => {
        return result;      
    }).catch(error => {
        return error;
    });
}

var ShortenerContainer = React.createClass({
    getInitialState: function() {
        return {
            url: '',
            status: '',
            shortened: ''
        }
    },
    handleSubmitUrl: function(e) {
        e.preventDefault();
        this.setState({
            status:'loading'
        });
        getShortenedUrl(this.state.url)
            .then(result => {
                if(result.data) {
                    this.setState({                        
                        status: 'success',
                        shortened: `https://jon-url-shortener.herokuapp.com/urls/${result.data.shortUrl}`
                    });
                } else {
                    this.setState({                        
                        status: 'error',
                        shortened: ''                   
                    });
                }                
            });
    },
    handleUpdateUrl: function(e) {
        this.setState({
            url: e.target.value
        });
    },
    render: function () {
        return <Shortener 
                url={this.state.url}
                status={this.state.status}
                shortened={this.state.shortened}
                onSubmitUrl={this.handleSubmitUrl}
                onUpdateUrl={this.handleUpdateUrl}/>
    }
});

module.exports = ShortenerContainer;