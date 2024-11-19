const nextConfig = {
  output: "export",
  images: {
    loader: "default",
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
};

export default nextConfig;
