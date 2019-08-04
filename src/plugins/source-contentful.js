require(`dotenv`).config()

module.exports = {
  resolve: `gatsby-source-contentful`,
  options: {
    accessToken: process.env.CONTENFUL_ACCESS_TOKEN,
    spaceId: process.env.CONTENFUL_SPACE_ID,
  },
}
