import Icon from '@mui/icons-material/Description';
import { ButtonLayout } from '@/components/navigation/@layout/index';
import { offsetMove } from '@/util/offset';

export function DescriptionIcon() {
  return (
    <ButtonLayout>
      <Icon onClick={() => offsetMove('work')} />
    </ButtonLayout>
  );
}
