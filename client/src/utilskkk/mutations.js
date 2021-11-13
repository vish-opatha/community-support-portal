// import { gql } from "@apollo/client";

// export const LOGIN_USER = gql`
//     mutation login($email: String!, $password: String!) {
//         login(email: $email, password: $password) {
//             token
//             user {
//                 _id
//                 username
//                 savedBooks {
//                     bookId
//                 }
//             }
//         }
//     }
// `

// export const ADD_USER = gql`
//     mutation addUser($username: String!, $email: String!, $password: String!) {
//         addUser(username: $username, email: $email, password: $password) {
//             token
//             user {
//                 _id
//                 username
//             }
//         }
//     }
// `
// export const SAVE_BOOK = gql`
//     mutation saveBook($book: BookInput!) {
//         saveBook(book: $book) {
//             _id
//             username
//             savedBooks {
//                 _id
//                 title
//             }
//         }
//     }
// `

// export const REMOVE_BOOK = gql`
//     mutation removeBook($bookId: String!) {
//         removeBook(bookId: $bookId) {
//             _id
//             username
//             email
//             savedBooks {
//                 _id
//                 bookId
//                 authors
//                 description
//                 title
//                 image
//                 link
//             }
//         }
//     }
// `
