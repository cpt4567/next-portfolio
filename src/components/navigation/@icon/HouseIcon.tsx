import Icon from '@mui/icons-material/House';
import { ButtonLayout } from '@/components/navigation/@layout/index';
import { offsetMove } from '@/util/offset';

export function HouseIcon() {
  return (
    <ButtonLayout>
      <Icon onClick={() => offsetMove('home')} />
    </ButtonLayout>
  );
}
