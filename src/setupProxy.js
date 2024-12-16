const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // '/api' 경로로 들어오는 요청에 대해 프록시 설정
    createProxyMiddleware({
      target: "http://api.kcisa.kr", // 실제 API 서버 주소
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // '/api' 부분을 제거하고 실제 API 경로와 매칭
      },
    })
  );
};
