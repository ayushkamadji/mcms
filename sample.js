import path from 'path'
import express from 'express'
const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR))
app.use('/static', (req, res) => {
    res.send('I AM JUST STATIC MURAH haha')
})
app.set('view engine', 'ejs');
app.use('/dashboard', (req, res) => {
    app.set('coba', path.join(__dirname, './coba'));
    // res.send('dash')
    // res.sendFile(HTML_FILE)
    res.render('index');
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})