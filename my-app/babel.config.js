// module.exports = {
//     presets: ["module:metro-react-native-babel-preset"],
//     plugins: [["module:react-native-dotenv"]],
    
//   };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['inline-dotenv'], // Ensure you installed babel-plugin-inline-dotenv
  };
};





  
  
  