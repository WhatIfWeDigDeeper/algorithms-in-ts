module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/src/graph/dijkstrasWeightedGraph.test.js$']
};
