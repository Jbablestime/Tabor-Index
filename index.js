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
  callbackURL: 'https://taborindex.com/callback',
  scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
  process.nextTick(() => done(null, profile));
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});


app.get('/auth', passport.authenticate('discord'));
app.get('/callback', passport.authenticate('discord', {
  failureRedirect: '/404'
}), (req, res) => {
  res.redirect('/');
});

site_admins = ["750454372650975232", "959591187151466537"]

app.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
}
const user = req.user;
const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
if (user.id == site_admins[0] || user.id == site_admins[1]){

  res.render('index', {
    username: user.username,
    avatarURL: avatarURL,
    userID: user.id
  });
} else {
  req.logout(() => {
    res.redirect('/login');
  });
}
});

app.get('/fleamarket', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
}
  const user = req.user;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  res.render('market', {
    username: user.username,
    avatarURL: avatarURL,
    userID: user.id
  });
});

app.get('/admin', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
}

  const user = req.user;
  const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  if (user.id == site_admins[0] || user.id == site_admins[1]){
    console.log(`${user.username} (${user.id}) accessed /admin.`)
  } else {
    console.log(`${user.username} (${user.id}) attempted to access /admin but failed.`)
  }

  if (user.id == site_admins[0] || user.id == site_admins[1]){
  res.render('admin', {
    username: user.username,
    avatarURL: avatarURL,
    userID: user.id
  });
  } else {
    res.redirect('/')
  }
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
  res.json({404: "Uh oh! I probably coded the site wrong... Maybe not, I don't know."})
});

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

const messagePayload = {
  content: '',
  username: 'TaborIndex Status',
  avatar_url: '',
  embeds: [
    {
      title: 'Server Status',
      description: 'TaborIndex is now `ONLINE`',
      color: 15258703,
    }
  ]
};



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`[TI] The server is now online.`);
  axios.post("https://discord.com/api/webhooks/1269653995191013479/eeRqePdkhUbs5-TRSNWKBE4sBi62lwhPtNewhK1uKrC4MOSRW91sbpvtfGk4HtwdPUBQ", messagePayload)
  .then(response => {
    console.log('Message sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
});
