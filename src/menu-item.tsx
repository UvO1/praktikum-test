import MenuItemStyle from './menu-item.module.css';

interface IMenuItem{
    active: boolean;
    text: string;
}

function MenuItem(props: IMenuItem){
    return(<div className={`${MenuItemStyle.line} ${(props.active) && (`${MenuItemStyle.active_line}`)}`}>
        {props.text} 
</div>
    );
}

export default MenuItem;