const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    //(서버에러, 성공)
    // 세션에는 서버에 유저아이디만 저장
    done(null, user.id);
  });

  /**
   * 복원
   * userid 를 통해 DB 에서 사용자 데이터 복구
   * 로그인 한 뒤에는 라우터 실행전 매번 실행됨 -> req.user 로 로그인 정보 조회 가능
   */
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      // done(서버, 성공)
      done(null, user); // req.user 에 정보를 넣어줌
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
