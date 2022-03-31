export const fetchInfo = async (id) => {
  const URI = `https://api.tvmaze.com/shows/${id}`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
