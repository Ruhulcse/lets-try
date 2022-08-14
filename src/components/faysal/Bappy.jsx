import {Main} from './styled/Main.styled';
import {Title} from './styled/Title.styled';
import {Content} from './styled/Content.styled'
import {ImageContainer} from './styled/ImageContainer.styled'
import {Info} from './styled/Info.styled'
import myphoto from './img/IMG_20220731_120514.jpg';
function Bappy () { 
    return <>
    <Main>
        <section>
            <Title>
                <h3>Welcome, </h3>
                <h1>Lets-try</h1>
            </Title>
               <Content>
                <ImageContainer>
                    <img src={myphoto} alt='Faysal'/>
                </ImageContainer>
                <Info>
                    <p>Hi, I am bappy</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut maxime natus blanditiis distinctio voluptates autem architecto odit, omnis, eveniet possimus facilis incidunt nostrum, laborum fugiat aliquam deserunt! Amet dignissimos velit veniam excepturi nesciunt natus est placeat reiciendis</p>
                </Info>
                </Content> 
            
        </section>
    </Main>
    </>
}

export default Bappy;