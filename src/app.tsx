import Title from "./title";
import AppStyle from './app.module.css';
import Content from "./content";

function App(){
    const subtitle: string = 'Leave your contacts and we will contact you as soon as possible';
    return(
        <div className={AppStyle.area}>
            <Title/>
            <Content subtitle={subtitle}/>
        </div>

    )
}
export default App;