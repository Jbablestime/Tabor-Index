const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const path = require('path');
const { rateLimit } = require('express-rate-limit')

const app = express();

app.use(session({secret: 'tabor_index_dxis817$', resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new DiscordStrategy({
  clientID: '1268277617648205865',
  clientSecret: 'wcSXbLEgPMncbIA3IgnrN3kftvZw-uRg',
  callbackURL: 'http://localhost:3000/callback',
  scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
  process.nextTick(() => done(null, profile));
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/auth', passport.authenticate('discord'));
app.get('/callback', passport.authenticate('discord', {
  failureRedirect: '/404'
}), (req, res) => {
  res.redirect('/');
});

app.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
}

app.get('/admin', (req, res) => {
  if (!user.id == "750454372650975232" && "959591187151466537") {
    return res.redirect('/');
  }
  res.render('admin', {
    username: user.username,
    avatarURL: avatarURL,
    userID: user.id
  });
});

  const user = req.user;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  res.render('index', {
    username: user.username,
    avatarURL: avatarURL,
    userID: user.id
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

app.get('/404', (req, res) => {
  res.json({"message": "There was an error, 404."})
});

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 50 requests / 15 minutes
	limit: 50,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})
app.use(limiter)

app.get('/api', async (req, res) => {
    try {
        const url = 'https://ghostsoftabor.com';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const playersOnline = $('.players-online .number').text();
        const serverRegions = $('.countries-online .number').text();
        const playerDeaths = $('.total-deaths .number').text();
        const totalRaids = $('.dogtags-taken .number').text();
        const shotsFired = $('.shots-fired .number').text();

        res.json({
          "player": {
            playersOnline,
            serverRegions,
          },
          "stats": {
            playerDeaths,
            totalRaids,
            shotsFired
          }
        });
    } catch (error) {
        console.error('Failed to fetch or parse the webpage:', error);
        res.status(500).json({ error: 'Failed to fetch or parse the webpage' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
