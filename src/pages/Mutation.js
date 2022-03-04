import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

export default function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Hotdog",
        quantityPerUnit: 4,
      },
    }
  );

  if (loading) return <div>spinner... </div>;

  if (error) return <div>something went wrong</div>;

  console.log({ data });

  return (
    <div>
      <button onClick={() => createProduct()}></button>
    </div>
  );
}
