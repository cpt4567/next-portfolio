'use client';
import styles from './styles.module.css';

export default function ExcelUi() {
  const handleChangeText = (name: 'font-black' | 'underline') => {
    const target = name === 'font-black' ? '.info-table' : '.comment-table';
    const $table = document.querySelectorAll(target);

    if ($table)
      if ($table[0].className.includes(name)) {
        const remove = $table[0].className.replace(name, '');
        $table.forEach((obj) => {
          obj.className = remove;
        });
      } else {
        const add = `${$table[0].className} ${name}`;
        $table.forEach((obj) => {
          obj.className = add;
        });
      }
  };

  const handleChangeAlign = (name: 'text-left' | 'text-center' | 'text-right') => {
    const $table = document.getElementById('table-body');

    if ($table)
      switch (name) {
        case 'text-left':
          const remove_c_r = $table.className.replace(/text-center | text-right/g, '');

          $table.className = `${remove_c_r} ${name}`;
          break;
        case 'text-center':
          const remove_l_r = $table.className.replace(/text-left | text-right/g, '');
          $table.className = `${remove_l_r} ${name}`;

          break;
        case 'text-right':
          const remove_l_c = $table.className.replace(/text-left | text-center/g, '');
          $table.className = `${remove_l_c} ${name}`;

          break;
        default:
          break;
      }
  };

  return (
    <div className="flex flex-row">
      <button className="m-2" onClick={() => handleChangeText('font-black')}>
        <div className="align-icon font-black">
          <span>가</span>
        </div>
      </button>

      <button className="m-2" onClick={() => handleChangeText('underline')}>
        <div className="align-icon underline">
          <span className="">가</span>
        </div>
      </button>

      <button className="m-2" onClick={() => handleChangeAlign('text-left')}>
        <div className={styles['align-icon']}>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-short-left']}></span>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-short-left']}></span>
        </div>
      </button>
      <button className="m-2" onClick={() => handleChangeAlign('text-center')}>
        <div className={styles['align-icon']}>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-long']}></span>
        </div>
      </button>

      <button className="m-2" onClick={() => handleChangeAlign('text-right')}>
        <div className={styles['align-icon']}>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-short-right']}></span>
          <span className={styles['align-icon-long']}></span>
          <span className={styles['align-icon-short-right']}></span>
        </div>
      </button>
    </div>
  );
}
