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
    "query HorseGetByName($name: String) {\n  horse(where: {name: $name}) {\n    createdAt\n    foaling\n    gender\n    id\n    name\n    publishedAt\n    updatedAt\n    profileImage {\n      url\n    }\n  }\n}": types.HorseGetByNameDocument,
    "query HorsesGetAll {\n  horses {\n    id\n    name\n    profileImage {\n      url\n    }\n  }\n}": types.HorsesGetAllDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HorseGetByName($name: String) {\n  horse(where: {name: $name}) {\n    createdAt\n    foaling\n    gender\n    id\n    name\n    publishedAt\n    updatedAt\n    profileImage {\n      url\n    }\n  }\n}"): typeof import('./graphql').HorseGetByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HorsesGetAll {\n  horses {\n    id\n    name\n    profileImage {\n      url\n    }\n  }\n}"): typeof import('./graphql').HorsesGetAllDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
