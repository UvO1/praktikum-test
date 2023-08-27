import InfoStyle from './info.module.css';
import Photo1 from "./assets/images/IMG_1.jpg";
import Photo2 from "./assets/images/IMG_2.jpg";
import Video1 from "./assets/video/video.mp4";

interface IInfo{
    active: number;
}

function Info(props: IInfo) {
    return (
    <div className={InfoStyle.area}>
        {(props.active === 0) && 
        <div className={InfoStyle.about}>
            <p>Меня зовут Оля. Я - frontend-разработчик.</p>
            <div className={InfoStyle.photo_area}>
                <p>Это мое школьное фото. Я очень много училась и старалась стать хорошим специалистом.</p>
                <img src={Photo1} alt="Photo from school"/>
            </div>
            <div className={InfoStyle.photo_area}>
                <img src={Photo2} alt="Actual Photo"/>
                <p>А это я сейчас! Все также продолжаю получать новые знания, но теперь готова делиться ими с окружающими.</p>
            </div>
        </div>
        }
        {(props.active === 1) && 
        <div className={InfoStyle.about}>
            <p>Мой путь к программированию начался еще в школе, когда я решила сдавать ЕГЭ по информатике.</p>
            <p>Полюбив информатику в процессе подготовки к ЕГЭ, я выбрала самый сложный факультет в понравившемся ВУЗе. Учеба давалась непросто, но как здорово было шаг за шагом идти к своей цели и преодолевать сложности! </p>
            <p>А дальше, приобретя профессию «математик, системный программист», я много лет работала в академии наук: создавала программные комплексы и написала не один десяток научных статей. Параллельно я работала и продолжаю работать frontend-разработчиком на многих проектах. В настоящий момент заканчиваю frontend-проект на платформе профессионального волонтерства ProCharity.</p> 
            <p>Программирование стало важной частью моей жизни. </p>
        </div>
        }
        {(props.active === 2) && 
        <div className={InfoStyle.about}>
            <p>Предлагаю посмотреть полезное видео про CSS-свойство Border</p>
            <video controls>
                <source src={Video1} type='video/mp4' />
            </video>
        </div>
        }
        {(props.active === 3) && 
        <div className={InfoStyle.about}>
            <p>Ознакомиться с исходниками данного приложения можно <a href="https://github.com/UvO1/praktikum-test">по ссылке</a></p>
        </div>
        }

    </div>
  )
}
export default Info;