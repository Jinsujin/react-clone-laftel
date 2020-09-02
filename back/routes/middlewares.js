exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // passport 에서 제공하는 로그인여부
    next();
  } else {
    res.status(401).send('로그인이 필요합니다');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('로그인하지 않은 사용자만 접근이 가능합니다.');
  }
};