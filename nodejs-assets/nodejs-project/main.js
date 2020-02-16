// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');
  
async function init() {
  rn_bridge.channel.send("in ipfs init " + require.resolve('ipfs'));
  rn_bridge.channel.send("From node in main.js " + require.resolve('express'));
  //await init();
  const IPFS = require.resolve('ifps');
  rn_bridge.channel.send("after require(ipfs" + IPFS);
  //const ipfs_node = await IPFS.create();
  rn_bridge.channel.send("after ipfs_node")
  //var debug = require('debug');
  //debug('ipfs');
  console.log("IPFS node ", ipfs_node.version);
  //rn_bridge.channel.send("from Node version " + ipfs_node.version);
} 

// Echo every message received from react-native.
rn_bridge.channel.on('message', async (msg) => {
  //rn_bridge.channel.send(msg);
  switch (msg) {
    case "save":
      break;
    case "retrieve":
      break;
    default: 
      break;
  };
  //rn_bridge.channel.send("From node in main.js " + require.resolve('ipfs'));
  await init();
  /* const IPFS = require.resolve('ifps');
  rn_bridge.channel.send("after require(ipfs" + IPFS);
  const ipfs_node = await IPFS.create();
  rn_bridge.channel.send("after ipfs_node")
  var debug = require('debug');
  debug('ipfs');
  console.log("IPFS node ", ipfs_node.version);
  rn_bridge.channel.send("from Node version " + ipfs_node.version); */
  //rn_bridge.channel.send("after init from node");
} );

// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");