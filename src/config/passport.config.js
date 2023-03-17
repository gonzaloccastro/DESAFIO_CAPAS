import passport from "passport";
import local from "passport-local";
import userServices from "../models/registro.model.js";
import { isValidPassword, createHash } from "../utils.js";
import GithubStrategy from "passport-github2";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { firstName, lastName, email, age } = req.body;
        try {
          const user = await userServices.findOne({ email: username });
          if (user)
            return done(null, false, { message: "El usuario ya existe" });
          const newUser = {
            firstName,
            lastName,
            email,
            age,
            password: createHash(password),
          };
          const response = await userServices.create(newUser);
          return done(null, response);
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userServices.findOne({ email: username });
          if (!user)
            return done(null, false, { message: "Usuario no encontrado" });
          if (!isValidPassword(user, password))
            return done(null, false, { message: "Contraseña incorrecta" });
          return done(null, user);
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );

  passport.use(
    "github",
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL:  `http://localhost:8080/api/sessions/githubcallback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);
          const user = await userServices.findOne({
            email: profile._json.email,
          });
          if (!user) {
            const newUser = {
              firstName: profile._json.name,
              lastName: "",
              age: 0,
              email: profile._json.email,
              password: "",
            };
            const response = await userServices.create(newUser);
            return done(null, response);
          } else {
            return done(null, user);
          }
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userServices.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default initializePassport;


/*import passport from "passport";
import local from "passport-local";
import userServices from "../models/registro.model.js";
import { isValidPassword, createHash } from "../utils.js";
import GithubStrategy from "passport-github2";


const LocalStrategy = local.Strategy;

const initializePassport = () => {

  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { first_name, last_name, email, age } = req.body;

        try {
          let user = await userServices.findOne({ email: username });
          if (user) {
            console.log("El usuario ya existe");
            return done(null, false);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
          };
          let result = await userServices.create(newUser);
          return done(null, result);
        } catch (err) {
          return done("Error al obtener el usuario", false, err);
        }
      }
    )
  );
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userServices.findOne({ email: username });
          if (!user)
            return done(null, false, { message: "Usuario no encontrado" });
          if (!isValidPassword(user, password))
            return done(null, false, { message: "Contraseña incorrecta" });
          return done(null, user);
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );

  passport.use(
    "github",
    new GithubStrategy({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL:  `http://localhost:8080/api/sessions/githubcallback`,
    }, async (accessToken, refreshToken, profile, done)=>{
      try {
        onsole.log(profile);
          const user = await userServices.findOne({
            email: profile._json.email,
          });
          if (!user) {
            const newUser = {
              firstName: profile._json.name,
              lastName: "",
              age: 0,
              email: profile._json.email,
              password: "",
            };
            const response = await userServices.create(newUser);
            return done(null, response);
          } else {
            return done(null, user);
          }
        } catch (err) {
          return done("Error al obtener el usuario" + err);
      }
    })
  );
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userServices.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default initializePassport;
*/