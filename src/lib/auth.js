export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  localStorage.removeItem('token')
}
// * Current User Playlists (LocalStorage)
export function setPlaylists(playlists){
  localStorage.setItem('playlists', JSON.stringify(playlists))
}

export function getPlaylists() {
  return localStorage.getItem('playlists')
}

export function removePlaylists() {
  return localStorage.removeItem('playlists')
}


//! Current User Likes
export function setLikes(likes){
  localStorage.setItem('likes', JSON.stringify(likes) )
}

export function getLikes() {
  return window.localStorage.getItem('likes')
}

export function removeLikes() {
  return window.localStorage.removeItem('likes')
}

export function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) return false
  return userId === payload.userId
}

