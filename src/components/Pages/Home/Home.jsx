import React, { useState,useEffect  } from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Header } from '../../Layouts/Header/Header';
import { ImgPerfil } from '../../ImgPerfil/ImgPerfil';
import { Name } from '../../Name/Name';
import { Item } from '../../Item/Item';
import NavBar from '../../NavBar/NavBar';
import { LogoSena } from '../../LogoSena/LogoSena';
import { UserInfoSocial } from '../../UserInfoSocial/UserInfoSocial';
import { ItemPages } from '../../ItemPages/ItemPages';
import { Main } from '../../Layouts/Main/Main';
import { TitleSection } from '../../TitleSection/TitleSection';
import { InformationPerfil } from '../../InformationPerfil/InformationPerfil';
import { Content } from '../../Content/Content';
import { Proyects } from '../../Proyects/Proyects';
import { References } from '../../References/References';
import { ItemExperience } from '../../ItemExperience/ItemExperience';
import mongodb from '../../../assets/mongodb.png';
import java from '../../../assets/java.png';
import JS from '../../../assets/JS.png';
import react from '../../../assets/React.png';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import './Home.css';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  };
  useEffect(() => {
    const handleResize = () => {
      const shouldBeVisible = window.innerWidth < 768; 
      setIsVisible(shouldBeVisible);
    };

    
    
  }, []);

  return (
    <>
      <Header isVisible={isVisible}>
        <RxCross1 id='exit'onClick={toggleVisibility} />
        <ImgPerfil />
        <Name name='SANTIAGO PEÑA' />
        <NavBar>
          <Item link='#'  text='Inicio' />
          <Item link='#profile' text='Perfil' />
          <Item link='#proyects' text='Proyectos' />
          <Item link='#references' text='Referencias' />
          <Item link='#expe' text='Experiencia' />
        </NavBar>
        <LogoSena />
        <UserInfoSocial>
          <ItemPages  icon={<BsLinkedin />} />
          <ItemPages link={'https://www.facebook.com/santiago.penasanchez.9/'} icon={<BsFacebook />} />
          <ItemPages link={'https://www.instagram.com/santiago_xyt/?next=%2F'} icon={<BsInstagram />} />
          <ItemPages icon={<BsTwitter />} />
          <ItemPages link={'https://wa.link/l6qp0q'} icon={<BsWhatsapp />} />
        </UserInfoSocial>
      </Header>
      <Main>  
        <RxHamburgerMenu id='menu' onClick={toggleVisibility} />
        <TitleSection id='profile' title='PERFIL' />
        <InformationPerfil info="Mi nombre es Santiago Peña, tengo 18 años y vivo en Circasia Qundio.
        Tengo conocimientos sobre diferentes aspectos de la tecnologia, uno de ellos es la programación, tengo un tecnico en desarrollo de software y actualemnte me encuentro cursando un tecnologo de esa misma rama,
        mi interes en esta area nace desde el momento en que comprendi un poco el como se pueden construir nuevos proyectos y ayudar a solucionar problemas cotidianos
        " />
        <TitleSection id='proyects'title='PROYECTOS' />
        <Content>
          <Proyects title="API REST" description="Una API REST basica, usando TypeScript, conectada una base de datos no relacional en la nube (MongoAtlas)" Img='https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392284.jpg?t=st=1709412568~exp=1709416168~hmac=085b993d2c12a318adbd0f5090eb6209aa03fe0df8646309cd4d743b7e7f0b68&w=740' url='https://github.com/Sanhack22/API2.git'/>
          <Proyects title="Bleux" description="Maquetacion de la pagina Bluux, usando HTML y CSS" Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/Sanhack22/Bleux.git'/>
          <Proyects title="AppTastico" description="Maquetacion de la pagina AppTastico usando HTML y CSS" Img='https://img.freepik.com/free-vector/website-outline-with-globe-grid_78370-4876.jpg?t=st=1709413791~exp=1709417391~hmac=34f6e6ebedbf4f58a343ea0f78257ef9f34c479b6d8dcff602deb663aa76c4eb&w=740' url='https://github.com/Sanhack22/ApptasticoFinal.git'/>
          <Proyects Img='https://th.bing.com/th/id/OIP.wEoPGoUAgWhxNz3H77rcEgHaEo?rs=1&pid=ImgDetMain' title="Carrito Compras" description="Proyecto usando JavaScript donde simulamos una tienda de libros, donde podemos agregar y eliminar productos del carrito de compras, alterando su stock" url='https://www.youtube.com/results?search_query=error+de+fps+en+lol+2024'/>
        </Content>
        <TitleSection id='references' title='REFERENCIAS' />
        <Content>
          <References name='Nombre:' cargo='Cargo:' number='Numero:3205677966' email='Email@gmail.com' />
          <References name='Nombre:' cargo='Cargo:' number='Numero:3205677966' email='Email@gmail.com' />

        </Content>
        <TitleSection id='expe' title='EXPERIENCIA' />
        <Content>
          <ItemExperience image={mongodb} value="50" progress="Intermedio" />
          <ItemExperience image={java} value="50" progress="Intermedio" />
          <ItemExperience image={JS} value="50" progress="Intermedio" />
          <ItemExperience image={react} value="50" progress="Intermedio" />
        </Content>
      </Main>
    </>
  )
}
