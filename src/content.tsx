import { useState } from 'react';
import ContentStyle from './content.module.css';
import MenuItem from './menu-item';
import Info from './info';

type TContent = {
    subtitle: string;
}

function Content(props: TContent) {
    const [activeMenu, setActiveMenu] = useState<number>(0);
    function handleActiveMenu(active: number){
        setActiveMenu(active);
    }
    return( 
        <div className={ContentStyle.area}>
            <div className={ContentStyle.form_area}>
                <div className={ContentStyle.menu}>
                    <div onClick={()=>handleActiveMenu(0)}>
                        <MenuItem active= {(activeMenu === 0)? true : false} text={'Обо мне'} />
                    </div>
                    <div onClick={()=>handleActiveMenu(1)}>
                        <MenuItem active= {(activeMenu === 1)? true : false} text={'Мой путь в IT'} />
                    </div>
                    <div onClick={()=>handleActiveMenu(2)}>
                        <MenuItem active= {(activeMenu === 2)? true : false} text={'Полезное видео'} />
                    </div>
                    <div onClick={()=>handleActiveMenu(3)}>
                        <MenuItem active= {(activeMenu === 3)? true : false} text={'Об этом приложении'} />
                    </div>
                </div>
                <Info active={activeMenu}/>
            </div>
        </div>
    );
  }
export default Content;