import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const GraphQl = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img src={`${photo}`} height="100" width="100"/>
      <b>{description}</b>
    </div>
  ));
};

export default GraphQl;
