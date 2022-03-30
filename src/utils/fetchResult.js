export const fetchResult = async (search) => {
  const URI = `https://api.tvmaze.com/search/shows?q=${search}`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
