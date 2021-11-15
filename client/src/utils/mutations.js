import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) 
    {
        login(email: $email, password: $password) 
        {
            token
            user 
            {
                _id
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($title: String!, $firstName: String!, $lastName: String!,$organisation: String!,$location:String!,$email: String!,$telephone: String!,$orgWebsite: String!,$password: String!) {
        addUser(title: $title, firstName: $firstName, lastName: $lastName, organisation: $organisation,location:$location,email:$email,telephone:$telephone,orgWebsite:$orgWebsite,password:$password) {
            token
            user
            {
                _id
                email
            }
        }
    }
`;

export const ADD_SERVICE = gql`
mutation addService($description:String,$organisation: String, $eligibility: String!, $openedDays: String!, $openedHours: String!, $modeOfCommunication: String!,$location:String!,$categoryId:String) 
{
    addService(description:$description, organisation:$organisation, eligibility: $eligibility, openedDays: $openedDays, openedHours: $openedHours, modeOfCommunication: $modeOfCommunication,location:$location,categoryId:$categoryId) 
    {
        _id
                
    }
}
`;


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
