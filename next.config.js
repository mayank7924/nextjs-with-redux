const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const config = {
      serverRuntimeConfig: {
        // Will only be available on the server side
        userEndpoint: "https://reqres.in/api/users/1",
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        username: "John Doe",
      },
      redirects: async () => {
        return [
          {
            source: "/other",
            destination: "/",
            has: [
              {
                type: "header",
                key: "x-redirect-me",
              },
              {
                type: "header",
                key: "x-redirect-me",
              },
            ],
            permanent: false,
          },
        ];
      },
      async headers() {
        return [
          {
            source: "/",
            headers: [
              {
                key: "x-custom-header",
                value: "my custom header value",
              },
            ],
          },
        ];
      },
    };
    return config;
  }
  return {
    /* config options for all phases except development here */
  }
};
