/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* remotePatterns: [
      "https://images.pexels.com/photos/6796574/pexels-photo-6796574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",//this use for adding a single or array link of image 
    ], */
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }], //this will allow us to add image website like pexel
  },
};

export default nextConfig;
