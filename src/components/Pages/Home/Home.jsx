import React from 'react'
import { BsLinkedin } from "react-icons/bs";

import './Home.css'
import {ImgPerfil} from '../../ImgPerfil/ImgPerfil'
import { Header } from '../../Layouts/Header/Header'
import { Name } from '../../Name/Name'
import { Item } from '../../Item/Item'
import NavBar from '../../NavBar/NavBar'
import { LogoSena } from '../../LogoSena/LogoSena'
import {UserInfoSocial} from '../../UserInfoSocial/UserInfoSocial'
import { ItemPages } from '../../ItemPages/ItemPages'






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
                    <ItemPages icon={<BsLinkedin/>} />
              </UserInfoSocial>
            </Header>
    </>

  )
}
