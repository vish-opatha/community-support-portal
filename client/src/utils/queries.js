import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query categories{
        serviceCategories{
            _id
            customerDescription
            description
            categoryId
        }
    }
`

export const SEARCH_BY_LOCATION = gql`
    query searchByLocation($location:String){
        servicesByLocation(location:$location){
            _id
            eligibility
            openedDays
            openedHours
            modeOfCommunication
            location
            categoryId
        }
    }
`
