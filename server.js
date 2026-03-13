const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));


let savedName = "";


app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome</h2>
        <p>Please enter your name to receive a greeting.</p>
        <form action="/submit" method="POST">
            <input type="text" name="userName" placeholder="Enter your name" required>
            <button type="submit">Get Greeting</button>
        </form>
    `);
});


app.post('/submit', (req, res) => {
    
    savedName = req.body.userName; 
    
  
    res.redirect('/greeting'); 
});


app.get('/greeting', (req, res) => {
    
    res.send(`<h2>Hello, ${savedName}!</h2><br><a href="/">Go Back</a>`);
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});