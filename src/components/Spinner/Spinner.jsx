import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      arialLabel="loading-indicator"
      height={40}
      width={40}
      strokeWidth={4}
      color="#ff751d"
      secondaryColor="#ffffff"
    />
  );
};

export default Spinner;
