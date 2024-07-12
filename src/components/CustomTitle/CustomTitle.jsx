import "../../styles/components/customTitle/dist/customTitle.css";

const CustomTitle = ({ title }) => {
  return (
    <h2 className="custom-title">
      <span />
      {title}
    </h2>
  );
};

export default CustomTitle;
