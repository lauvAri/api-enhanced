const { constructServer } = require('../server')

let appPromise

module.exports = async (req, res) => {
  if (!appPromise) {
    appPromise = constructServer().catch((err) => {
      console.error('constructServer failed:', err)
      appPromise = null
      throw err
    })
  }
  const app = await appPromise
  return app(req, res)
}
