import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const AddWilderForm = () => {
  const [wilderName, setWilderName] = useState("");

  const CREATE_WILDER = gql`
    mutation createWilder($name: String!) {
      createWilder(name: $name) {
        id
        name
      }
    }
  `;

  const [createWilder, { loading, error }] = useMutation(CREATE_WILDER);

  const handleAddWilder = async () => {
    try {
      const { data } = await createWilder({
        variables: { name: wilderName },
      });
      console.log("Wilder added:", data.createWilder);
    } catch (error) {
      console.error("Error adding wilder:", error);
    }
  };

  return (
    <div>
      <input value={wilderName} onChange={(e) => setWilderName(e.target.value)} />
      <br />
      <button onClick={handleAddWilder} disabled={loading}>
        Create wilder
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default AddWilderForm;
