import React,{useState} from 'react'
import { BsLinkedin,BsFacebook,BsInstagram,BsTwitter, BsWhatsapp   } from "react-icons/bs";

import './Home.css'
import {ImgPerfil} from '../../ImgPerfil/ImgPerfil'
import { Header } from '../../Layouts/Header/Header'
import { Name } from '../../Name/Name'
import { Item } from '../../Item/Item'
import NavBar from '../../NavBar/NavBar'
import { LogoSena } from '../../LogoSena/LogoSena'
import {UserInfoSocial} from '../../UserInfoSocial/UserInfoSocial'
import { ItemPages } from '../../ItemPages/ItemPages'
import {Main} from '../../Layouts/Main/Main'
import { TitleSection } from '../../TitleSection/TitleSection';
import { InformationPerfil } from '../../InformationPerfil/InformationPerfil';
import {Content} from '../../Content/Content'
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { ItemExperience } from '../../ItemExperience/ItemExperience';
import mongodb from '../../../assets/mongodb.png'
import java from '../../../assets/java.png'
import JS from '../../../assets/JS.png'
import react from '../../../assets/React.png'
import { RxHamburgerMenu,RxCross1  } from "react-icons/rx";










export const Home = () => {
  const [mostrarDiv, setMostrarDiv] = useState(true);
  
  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };


   return (

    <>
      <Header style={{ display: mostrarDiv ? 'block' : 'none' }}>
              <RxCross1 id='exit'/>
              <ImgPerfil/>
              <Name name='SANTIAGO PEÑA'/>
              <p></p>
              <NavBar>
                <Item text='Inicio' />
                <Item text='Perfil' />
                <Item text='Proyectos' />
                <Item text='Referencias' />
                <Item text='Experiencia' />
              </NavBar>
              <LogoSena/>
              
              <UserInfoSocial>
                    <ItemPages link={'https://www.google.com/search?q=a&rlz=1C1OKWM_esCO1097CO1097&oq=a&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg8MgYIBRAFGEAyBggGEAUYQDIGCAcQBRhA0gEHODc5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'} icon={<BsLinkedin/>} />
                    <ItemPages icon={<BsFacebook/>}/>
                    <ItemPages icon={<BsInstagram/>}/>
                    <ItemPages icon={<BsTwitter/>}/>
                    <ItemPages icon={<BsWhatsapp/>}/>

              </UserInfoSocial>
            </Header>
            <Main>
            <RxHamburgerMenu id='menu' onClick={toggleDiv}/>
                  <TitleSection title='PERFIL'/>
                  <InformationPerfil info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nulla voluptates fugit amet odit cupiditate. Eius aperiam nesciunt provident! Veritatis harum consectetur optio nemo, sit quo omnis doloremque hic quidem." />
                  <TitleSection title='PROYECTOS'/>
                  <Content>
                          <Proyects title="Mundo"  description="Lorem adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus sbnjkal jsbajkls a ksnajks amn sjklnasjab knjsasna ?
                    Lorem ipsum dolor sit, ame "/>
                    <Proyects title="Mundo"  description="Lorem adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus?
                    Lorem ipsum dolor sit, ame "/>
                     <Proyects title="Mundo"  description="Lorem adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus?
                    Lorem ipsum dolor sit, ame "/>
                     <Proyects title="Mundo"  description="Lorem adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus?
                    Lorem ipsum dolor sit, ame "/>
                  </Content>
                  <TitleSection title='REFERENCIAS'/>


                  <Content>
                          <References name='El Juan' cargo='Barrendero' number='3205677966' email='barrendero@gmail.com' />
                          <References name='El Juan' cargo='Barrendero' number='3205677966' email='barrendero@gmail.com' />
                          <References name='El Juan' cargo='Barrendero' number='3205677966' email='barrendero@gmail.com' />
                          <References name='El Juan' cargo='Barrendero' number='3205677966' email='barrendero@gmail.com' />

                  </Content>
                  <TitleSection title='EXPERIENCIA'/>

                  <Content>
                      <ItemExperience image={mongodb} value="50" progress="Intermedio"/>
                      <ItemExperience image={java} value="50" progress="Intermedio"/>
                      <ItemExperience image={JS} value="50" progress="Intermedio"/>
                      <ItemExperience image={react} value="50" progress="Intermedio"/>


                      
                      
                  </Content>

            </Main>
    </>

  )
}
