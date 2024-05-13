/* eslint-disable react/prop-types */
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#0e7490"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
