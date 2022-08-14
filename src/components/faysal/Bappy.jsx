import {Main} from './styled/Main.styled';
import {Title} from './styled/Title.styled';
import {Content} from './styled/Content.styled'
import {ImageContainer} from './styled/ImageContainer.styled'
import {Info} from './styled/Info.styled'
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
                    <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/83402006_756103394881887_5341243134854561792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGqwD54fNo40KTuamfCFmkm1PUgKe78T_DU9SAp7vxP8KmkbiSjj2dB4_FsxZEQ4BKKkUnXZUB3fdHWfv-7ZKRR&_nc_ohc=55xmftSOfwIAX_NkcjZ&tn=dgFT00LoRVYgRgrL&_nc_ht=scontent.fdac116-1.fna&oh=00_AT9GmbJlFFlfyONYVnLZ-ZTRtvNNxS63MefWfyMdz67pLw&oe=631E05D9" alt="555" />
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