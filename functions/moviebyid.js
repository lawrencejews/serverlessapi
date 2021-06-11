const movies = require('../data/movies.json')

exports.handler = async ({ queryStingParameters }) => {
  const { id } = queryStingParameters;
  const movie = movies.find((m) => m.id === id);
  if (!movie) {
    return {
      statusCode: 404,
      body: "Not Found"
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(movie)
  }
}