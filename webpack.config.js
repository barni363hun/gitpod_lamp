// Simple default webpack configuration to proxy apache with browser-sync for hot reloading
// on Gitpod with dynamically served PHP files

const { execSync } = require('child_process');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const PROXY_PORT=8001
const BS_PORT = 3005
const GP_URL = execSync(`gp url ${BS_PORT}`) 

module.exports = {
  mode: "development",
  entry: {},
  output: {},
  plugins: [
    new BrowserSyncPlugin(
      {
        ui: false,
        proxy: {
          target: `http://localhost:${PROXY_PORT}`
        },
        // Add other dynamic file types to be hot reloaded here in this array 
        files: [
          "public/**/*.php",
          "public/**/*.html"
        ],
        notify: true,
        port: BS_PORT,
        socket: {
          domain: GP_URL
        }
      }
    )
  ]
}