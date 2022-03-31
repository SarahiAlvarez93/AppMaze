export const fetchEpisodes = async (id) => {
  const URI = `https://api.tvmaze.com/shows/${id}/episodes`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
