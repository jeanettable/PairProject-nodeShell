const request = require('request');
// console.log(request);

module.exports = (urlName, show) => {
    request(urlName, (error, response, body) => {
        if(error) {     // Print the error if one occurred
            show('error:', error); 
        }   else    
        show('body:', body);    // Print the HTML for the url provided
    });
}