/* eslint-disable react/prop-types */

const Wrapper = ({ children, styles }) => {
  return (
    <div className={`max-w-[1370px] mx-auto w-full h-full ${styles}`}>
      {children}
    </div>
  );
};

export default Wrapper;
