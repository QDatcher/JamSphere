const { gql } = require('apollo-server-express');

//cloudinary

const typeDefs = gql`
  type Query {
    _: Boolean
  }

/*our mutation type for image upload which accepts the image location as a string whether local or remote. It returns a string.
*/

  type Mutation {
    uploadPhoto(photo: String): String
  }
`;

module.exports = typeDefs;