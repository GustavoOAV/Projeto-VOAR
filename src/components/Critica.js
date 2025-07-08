import React from "react";
import styles from "./Critica.module.css";

const CriticaCard = ({ image, title, link }) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className={styles.image} />
      </a>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Leia mais
        </a>
      </div>
    </div>
  );
};

const Critica = () => {
  const criticas = [
    {
      image: "/images/Crit1.png",
      title: "Crítica: Voar É o Que Me Põe de Pé – Blog do Arcanjo",
      link: "https://www.blogdoarcanjo.com/2024/10/14/critica-voar-e-o-que-me-poe-de-pe-tem-olivia-araujo-em-solo-de-grande-sensibilidade-poetica/",
    },
    {
      image: "/images/Crit2.png",
      title: "Olívia Araújo transforma o cotidiano em poesia – Mundo Negro",
      link: "https://mundonegro.inf.br/olivia-araujo-transforma-o-cotidiano-em-poesia-no-solo-voar-e-o-que-me-poe-de-pe/",
    },
    {
      image: "/images/Crit3.jpg",
      title: 'Em "Voar É o Que me Põe de Pé" – Canal Teatro',
      link: "https://canalteatromf.com.br/em-voar-e-o-que-me-poe-de-pe-olivia-araujo-propoe-um-olhar-para-a-poesia-da-vida/",
    },
    {
      image: "/images/Crit4.jpg",
      title:
        "Atriz Olívia Araújo (Maria Navalha da novela Fuzuê TV Globo) celebra a força da palavra no evento Elos da Língua 2025 - Suzano TV",
      link: "https://suzano.tv/2025/05/atriz-olivia-araujo-maria-navalha-da-novela-fuzue-tv-globo-celebra-a-forca-da-palavra-no-evento-elos-da-lingua-2025-2/",
    },
    {
      image: "/images/Crit5.png",
      title: "Atriz Olívia Araújo celebra a força da palavra no Elos da Língua 2025 - Maxmais",
      link: "https://maxmais.com.br/atriz-olivia-araujo-celebra-a-forca-da-palavra-no-elos-da-lingua-2025/",
    },
    {
      image: "/images/Crit6.jpg",
      title: "Atriz Olívia Araújo celebra a força da palavra no Elos da Língua 2025 - Elite Vale",
      link: "https://www.elitevale.com.br/materias/atriz-olivia-araujo-celebra-a-forca-da-palavra-no-elos-da-lingua-2025/#:~:text=A%20atriz%20Ol%C3%ADvia%20Ara%C3%BAjo%20ser%C3%A1,Jos%C3%A9%20dos%20Campos%20(SP)",
    },
  ];

  return (
    <section id="Critica" className={styles.container}>
      <h2 className={styles.heading}>Critica e Materias</h2>
      <div className={styles.grid}>
        {criticas.map((item, index) => (
          <CriticaCard
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Critica;
