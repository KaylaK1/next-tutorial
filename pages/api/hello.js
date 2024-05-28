// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}


// routes only apply to the server
// Won't increase client side bundle.
// useful for work needed on the backend
// or exposing an api for your users.
// rendering on the server allows clients
// to get data quicker, and search bots
// can crawl better

// Static Generation (prerendering at build time)
// Then upload to static host, can be
// delivered over a cdn
// data may become stale
// hard to scale to many pages
// Good for blogs 
