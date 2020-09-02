const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../models');

/**
 * local 로그인 전략
 */

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // req.body.email
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          // 1. email 로 사용자 체크
          const user = await User.findOne({
            where: { email: email },
          });
          if (!user) {
            // done(서버에러, 성공, 클라이언트에러)
            return done(null, false, { reason: '존재하지 않는 사용자입니다' });
          }
          // 2. password check
          const result = await bcrypt.compare(password, user.password);
          if (!result) {
            return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
          }
          // 일치하는 경우 user 의 정보를 보냄
          return done(null, user);
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );
};
