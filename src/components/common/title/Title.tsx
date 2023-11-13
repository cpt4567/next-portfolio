import { styled } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#e6e6e6',
  padding: '8px 12px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  borderBottom: ' 1px solid #d6d6d6',
}));

const Control = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const Button = styled('div')(({ theme }) => ({
  width: '12px',
  height: '12px',
  marginLeft: '8px',
  borderRadius: '50%',
}));

const Text = styled('span')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '900',
}));

export function Title({ children }: Props) {
  return (
    <Header>
      <Text>{children}</Text>
      <Control>
        <Button style={{ background: '#f7d54a' }} />
        <Button style={{ background: '#62c462' }} />
        <Button style={{ background: '#ee5f5b' }} />
      </Control>
    </Header>
  );
}
