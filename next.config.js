/** @type {import('next').NextConfig} */
 
module.exports = {
  async rewrites() {
    return [ 
      {
        source: "/:page",
        destination: "/?page=:page",
      },
    ];
  },
};