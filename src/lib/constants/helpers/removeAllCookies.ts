import Cookies from 'js-cookie'

export const removeAllCookies = () => {
  const cookiesKeys = Object.keys(Cookies.get())

  cookiesKeys.forEach((cookie) => Cookies.remove(cookie))
}
