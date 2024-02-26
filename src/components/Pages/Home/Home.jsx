import React from 'react'
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





export const Home = () => {
  return (

    <>
      <Header>
              <ImgPerfil/>
              <Name name='SANTIAGO PEÑA'/>
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
                  <TitleSection title='PERFIL'/>
                  <InformationPerfil info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates reprehenderit velit assumenda recusandae iure quibusdam id, illo alias architecto commodi! Rerum, est perspiciatis laborum ullam veniam corporis suscipit maiores voluptatibus?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nulla voluptates fugit amet odit cupiditate. Eius aperiam nesciunt provident! Veritatis harum consectetur optio nemo, sit quo omnis doloremque hic quidem." />
                  <TitleSection title='PROYECTOS'/>


                  

                  
            </Main>
    </>

  )
}
