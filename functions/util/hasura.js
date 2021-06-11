const fetch = require('node-fetch')

async function query({ query, variables = {} }) {
  const result = await fetch(process.env.HASURA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-admin-Secret': process.env.HASURA_ADMIN_SECRET,
    },
    BODY: JSON.stringify({query, variables}),
  })
    .then((response) => response.json())
  
  // TODO show helpful info if there is an error

  return result.data
}

exports.query = query;