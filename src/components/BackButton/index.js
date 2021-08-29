import { FiArrowLeft } from 'react-icons/fi';
import { Back } from './styles';

export default function BackButton() {
  return (
    <Back to="/home">
      <FiArrowLeft color="#FFFFFF" size={32} />
    </Back>
  );
}
