import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query getCategories{
        serviceCategories{
            _id
            categoryId
            customerDescription
            description
        }
    }
`

export const SEARCH_BY_LOCATION = gql`
    query searchByLocation($location:String){
        servicesByLocation(location:$location){
            _id
            description
            organisation
            eligibility
            openedDays
            openedHours
            modeOfCommunication
            location
            categoryId
        }
    }
`

