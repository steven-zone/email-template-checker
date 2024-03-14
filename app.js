const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Configure Handlebars as the view engine
app.engine('hbs', require('hbs').__express); 
app.set('view engine', 'hbs');
app.set('views', './views');

// Route to render the email verification page
app.get('/email-verfication', (req, res) => {
    const otp = "3234".split(''); // Example OTP split into an array
    const validity = 15; // OTP validity time in minutes

    res.render('email-verfication', { otpArr: otp, validity: validity }, function(err, html) {
        if (err) {
            console.log('here')
            console.log(err);
            res.send('An error occurred');
        } else {
            res.send(html);
        }
    });
});

app.get('/password-reset', (req, res) => {
    const otp = "3234".split(''); // Example OTP split into an array
    const validity = 15; // OTP validity time in minutes

    res.render('password-reset', { otpArr: otp, validity: validity }, function(err, html) {
        if (err) {
            console.log('here')
            console.log(err);
            res.send('An error occurred');
        } else {
            res.send(html);
        }
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
