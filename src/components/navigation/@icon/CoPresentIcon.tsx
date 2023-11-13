import Icon from '@mui/icons-material/CoPresent';
import { ButtonLayout } from '@/components/navigation/@layout/index';
import { offsetMove } from '@/util/offset';

export function CoPresentIcon() {
  return (
    <ButtonLayout>
      <Icon onClick={() => offsetMove('profile')} />
    </ButtonLayout>
  );
}
