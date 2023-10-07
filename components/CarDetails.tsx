import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails: React.FC<CarDetailsProps> = () => {
  return <div>CarDetails</div>;
};

export default CarDetails;
