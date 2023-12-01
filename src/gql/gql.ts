/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query HorseGetByName($slug: String!) {\n  horses(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        ...Horse\n      }\n    }\n  }\n}": types.HorseGetByNameDocument,
    "query HorsesGetAll {\n  horses {\n    data {\n      attributes {\n        name\n        slug\n        profileImage {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.HorsesGetAllDocument,
    "fragment Horse on Horse {\n  name\n  slug\n  createAsParent\n  updatedAt\n  foaling\n  gender\n  place\n  profileImage {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}": types.HorseFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HorseGetByName($slug: String!) {\n  horses(filters: {slug: {eq: $slug}}) {\n    data {\n      id\n      attributes {\n        ...Horse\n      }\n    }\n  }\n}"): typeof import('./graphql').HorseGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HorsesGetAll {\n  horses {\n    data {\n      attributes {\n        name\n        slug\n        profileImage {\n          data {\n            attributes {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').HorsesGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Horse on Horse {\n  name\n  slug\n  createAsParent\n  updatedAt\n  foaling\n  gender\n  place\n  profileImage {\n    data {\n      attributes {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').HorseFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
