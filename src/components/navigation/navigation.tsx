export default function NavigationComponent() {
  return (
    <div id="dock-container">
      <div id="dock">
        <ul>
          <li>
            <span>Address Book</span>
            <a href="#">
              <img src="icon-1.png" />
            </a>
          </li>
          <li>
            <span>App Store</span>
            <a href="#">
              <img src="icon-2.png" />
            </a>
          </li>
          <li>
            <span>Chrome</span>
            <a href="#">
              <img src="icon-3.png" />
            </a>
          </li>
          <li>
            <span>Firefox</span>
            <a href="#">
              <img src="icon-4.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
/*   <div
        id="draggable"
        className={styles['draggable-container']}
        draggable={true}
        onDragStart={handleItemDragStart}
      >
        <Link href={'/'}>
          <HomeIcon />
        </Link>
        <Link href={'/info'}>
          <InfoIcon />
        </Link>
        <Link href={'/info'}>
          <SkillIcon />
        </Link>
        <Link href={'/info'}>
          <WorkIcon />
        </Link>
      </div>  */
