// const isProd = process.env.ENV_BUILD === 'production';
const isProd = true;

const config = {
  production: {
    api_endpoint:
      // process.env.development.ENV_API_ENDPOINT ||
      "https://fakestoreapi.com",
    admin_api_endpoint:
      // process.env.development.ENV_ADMIN_DOMAIN ||
      "",
  },
  development: {
    api_endpoint: "https://api-dev.campk12.com",
    admin_api_endpoint: "",
  },
};

const apiConfig = isProd ? config.production : config.development;
export default apiConfig;
