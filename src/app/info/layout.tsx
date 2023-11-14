import MacUi from '@/components/mac-ui/mac-ui';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MacUi title={'Infomation'}>{children}</MacUi>
      <div id="dock-container">
        <div id="dock">
          <ul>
            <li>
              <span>Address Book</span>
              <a href="#">
                <img src="/img/work.png" />
              </a>
            </li>
            <li>
              <span>App Store</span>
              <a href="#">
                <img src="/img/work.png" />
              </a>
            </li>
            <li>
              <span>Chrome</span>
              <a href="#">
                <img src="/img/work.png" />
              </a>
            </li>
            <li>
              <span>Firefox</span>
              <a href="#">
                <img src="/img/work.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
