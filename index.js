//  documentation for aztro https://aztro.readthedocs.io/en/latest/
//  https://www.loginradius.com/blog/engineering/build-a-twitter-bot-using-nodejs/
// https://github.com/LoginRadius/engineering-blog-samples/blob/master/NodeJs/TwitterBot/index.js 
// https://github.com/desmondmorris/node-twitter/tree/master/examples#tweet

var Twitter = require('twitter');
// require('dotenv').config(); no longer using dotenv file 
var axios = require('axios');
var client = new Twitter({
    consumer_key: "GeL08Nq3g5LtTe71vrvJIXoDs", 
    consumer_secret: "rbZMOwrFJdHDMQXDpxZcYs25D17Xr7B2BLIOn5tH6S1BviaOtv",
    access_token_key: "1519157491543814145-IcAf0jxT01EGIlC4I4zZbbsYlyIjli",
    access_token_secret: "71Xs8mXQUmFygDrE2WdmgMNnOJlnUr9dTvzjpKsGMPExV"
});

  
//website end 

    //event listeners for the sign input 
    //  formSubmissionPost(){
    //     let sign = 'aries';

    //      URL = 'https://aztro.sameerkumar.website/?sign=' +sign +'&day=today'; 
    //      //post funtion goes here 
    //  };

    //needs to be modified so that this will get/embed most recent tweets**OPTIONAL 
    // componentDidMount () {
    // const twitterURL = ''; //url of twitter bot goes here 
    //     fetch(twitterURL, {
    //         method: 'GET'
    //     }).then(response => response.json())
    //     .then(json => { this.setState({json}); });

    //     // how do i? get function to display most recent tweets;
    //     // in a component didmount so it refresehes 
    // }
// daily tweeting- twitter end, want it to tweet horoscope all for loop 

    // checkWhatTime(){
    //     //if time is correct 
    //     // stackoverflow for time https://stackoverflow.com/questions/4455282/call-a-javascript-function-at-a-specific-time-of-day
    //     var now = new Date();
    //     var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
    //     if (millisTill10 < 0) {
    //         millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    //     }
    //     // is this correct syntax?? 
    //     setTimeout(postAtCertainTime, millisTill10); //how to edit it so it triggers the for loop that cycles throu


    //     const signList = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','saggitarius','capricorn','aquarius','pisces'];

    //     let sign = 'aries';

    //     // for( )
    //     URL = 'https://aztro.sameerkumar.website/?sign=' + sign +'&day=today'; 

    // }

    // postAtCertainTime(){ 
    // axios(URL).then(Response =>{
    // return [Response.data.current_date, Response.data.compatibility, Response.data.lucky_number, 
    //     Response.data.lucky_time, Response.data.color, Response.data.date_range]
    //     }).then(([current_date,compatibility,lucky_number,lucky_time,color,date_range ])=> {
    //     client.post('statuses/update', {status: current_date+  '\n' + compatibility + '\n' + lucky_number + '\n'+ lucky_time + '\n' + color+ '\n' + date_range},
    //     function(error, tweet, response){ 
    //     if(!error){
    //         console.log(tweet);
    //     } 
    //     })
    //  }
    //  );
    //pist to sent tweet is it 
    // check that client.post twitter documentation 
    // }

    testFunction(){
        console.log("in");
        URL = 'https://aztro.sameerkumar.website/?sign=' + 'aries' +'&day=today'; 
        axios(URL).then(Response =>{
            return [Response.data.current_date, Response.data.compatibility, Response.data.lucky_number, 
                Response.data.lucky_time, Response.data.color, Response.data.date_range]
                }).then(([current_date,compatibility,lucky_number,lucky_time,color,date_range ])=> {
                client.post('statuses/update', {status: current_date+  '\n' + compatibility + '\n' + lucky_number + '\n'+ lucky_time + '\n' + color+ '\n' + date_range},
                function(error, tweet, response){ 
                if(!error){
                    console.log(tweet);
                } 
                } )
             }
             );
    };
    
     









