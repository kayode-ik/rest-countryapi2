import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";

const Error = ({ text, msg }) => {
  return (
    <div className="loader">
      <span className="error">
        <ErrorTwoToneIcon />
      </span>
      <p>
        could Not be Loaded: {msg} {text}
      </p>
    </div>
  );
};

export default Error;
