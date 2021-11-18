import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query{
    users {
      id
      name
      lastname
      phone
      date_of_birth
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      name
      lastname
      phone
      date_of_birth
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation(
    $date_of_birth: date!
    $email: String!
    $id: Int!
    $lastname: String!
    $name: String!
    $phone: String!
  ) {
    insert_users_one(
      object: {
        id: $id
        email: $email
        date_of_birth: $date_of_birth
        lastname: $lastname
        name: $name
        phone: $phone
      }
    ) {
      date_of_birth
      email
      id
      lastname
      name
      phone
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query($id: Int!) {
    users_by_pk(id: $id) {
      date_of_birth
      email
      id
      lastname
      name
      phone
    }
  }
`;

export const UPDATE_USER = gql`
  mutation(
    $id: Int!
    $phone: String!
    $name: String!
    $lastname: String!
    $email: String!
    $date_of_birth: date!
  ) {
    update_users_by_pk(
      pk_columns: { id: $id }
      _set: {
        date_of_birth: $date_of_birth
        email: $email
        lastname: $lastname
        name: $name
        phone: $phone
      }
    ) {
      date_of_birth
      email
      lastname
      name
      phone
      id
    }
  }
`;