/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


// https://github.com/gatsbyjs/gatsby/issues/864#issuecomment-387763111
function modifyWebpackConfig(wp) {
  if (wp.stage == "develop") {
    let config = wp.config;
    console.log("OPEN THIS: ", "http://"+process.env.PUBLIC_HOST+':'+wp.program.port);
    if (process.env.PUBLIC_HOST) {
      config._config.output.publicPath = config._config.output.publicPath.replace('0.0.0.0', process.env.PUBLIC_HOST);
      config._config.entry.commons = config._config.entry.commons.map(point => {
        if (/webpack-hot-middleware/.test(point)) {
        point += '&dynamicPublicPath=true'
      }
      return point;
    })
    }
  }
}

module.exports = {modifyWebpackConfig}
