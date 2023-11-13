import Icon from '@mui/icons-material/Face';
import { ButtonLayout } from '@/components/navigation/@layout/index';
import { offsetMove } from '@/util/offset';

export function FaceIcon() {
  return (
    <ButtonLayout>
      <Icon onClick={() => offsetMove('info')} />
    </ButtonLayout>
  );
}
