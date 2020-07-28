import React from 'react';
import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain'
import Carousel from '../../Components/Carousel'
import dadosIniciais from '../../data/dados_iniciais.json'
import Footer from '../../Components/Footer'

function Home() {

  return (
    <div style={{ background: "#141414" }}>
    
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Há 37 anos atrás, o POP era criado! Relembre o primeiro hit da eterna Rainha MADONNA"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default Home;