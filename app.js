const express = require('express');

const app = express();
const port = 3000;

// Configure Handlebars as the view engine
app.engine('hbs', require('hbs').__express); 
app.set('view engine', 'hbs');
app.set('views', './views');

// Route to render the email verification page
app.get('/email-verfication', (req, res) => {
    const mailData= { otpArr: [1,2,3,4], validity: 15 };
    
    res.render('email-verfication', mailData, function(err, html) {
        if (err) {
            console.log(err);
            res.send('An error occurred');
        } else {
            res.send(html);
        }
    });
});

app.get('/password-reset', (req, res) => {
    const mailData ={passwordResetLink: 'http://localhost:3000/reset-password?token=1234'};

    res.render('password-reset', mailData, function(err, html) {
        if (err) {
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
