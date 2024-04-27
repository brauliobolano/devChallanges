/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /monaco-editor/,
        use: "null-loader",
      });
    }

    return config;
  },
};

export default nextConfig;
