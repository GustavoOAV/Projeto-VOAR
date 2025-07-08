import React from 'react';
import styles from './Elenco.module.css';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const IconGroup = ({ socialLinks }) => (
  <div className={styles.iconGroup}>
    {socialLinks.map(({ Icon, url }, i) => (
      <a key={i} href={url} target="_blank" rel="noopener noreferrer">
        <Icon className={styles.icon} />
      </a>
    ))}
  </div>
);

const Elenco = () => {
  return (
    <div id='Elenco' className={styles.container}>
      {/* OLIVIA ARAUJO */}
      <div className={styles.card}>
        <img src="/images/Olivia.png" alt="Olivia Araujo" className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>Olivia Araujo</h2>
          <p className={styles.paragraph}>
            Atriz paulistana estreou no teatro 1991, no cinema em 2001 e na televisão em 2008 entre participações em novelas e séries somam 18 trabalhos. O último foi em Fuzuê na Rede Globo. Com o filme <i>Domésticas</i>, ganhou prêmios no festival do filme do Recife e no Cine Ceará, participou de outras importantes produções.
          </p>

          <h3 className={styles.subtitle}>Novelas</h3>
          <ul className={styles.list}>
            <li>Fuzuê (Maria Navalha) 2023/2024</li>
            <li>Além da Ilusão (Augusta) 2022/2023</li>
            <li>Mar do Sertão (participação) 2023</li>
            <li>Além da Mãe (participação) 2021</li>
            <li>Falas Negras (Harriet Tubman) 2021</li>
            <li>Malhação Toda Forma de Amar (Vânia) 2019/2018</li>
            <li>O Tempo não Para (Cesária) 2018</li>
            <li>Vá de retro (participação) 2017</li>
            <li>Filhos da pátria (participação) 2017</li>
            <li>Tempo de Amar (Nicota) 2017</li>
            <li>Liberdade, Liberdade (Celeste) 2016</li>
            <li>Império (Tia Marta) 2014/2015</li>
            <li>Chiquititas (Shirley) 2013/2014</li>
            <li>Carrosel (participação) 2012</li>
            <li>Uma rosa com amor (Vilda Donãr) já 2012</li>
            <li>Ciranda de Pedra (participação) 2009</li>
            <li>Ciranda de Pedra (Jovelina) 2008</li>
          </ul>

          <h3 className={styles.subtitle}>Teatro</h3>
          <ul className={styles.list}>
            <li>Voar é o que me põe de pé</li>
            <li>A Cerimônia do Adeus</li>
            <li>Make é Karma</li>
            <li>Família Muda-se</li>
            <li>Sossego e Turbulência no Coração de Hortencia</li>
            <li>A volta ao Pó e a Voz de Zé</li>
            <li>Maria da Encarnação</li>
            <li>Usados</li>
          </ul>

          <h3 className={styles.subtitle}>Cinema</h3>
          <ul className={styles.list}>
            <li>Domésticas 2001</li>
            <li>Cidade de Deus 2002</li>
            <li>Contador de História 2011</li>
            <li>Gonzaga de Pai pra Filho 2012</li>
            <li>Onde está a Felicidade 2013</li>
            <li>Operações Especiais 2014</li>
            <li>Entre dois Amores 2014</li>
            <li>45 do segundo Tempo 2017</li>
          </ul>

          <IconGroup
  socialLinks={[
    { Icon: FaInstagram, url: 'https://www.instagram.com/oli_araujo/' },
    { Icon: FaFacebook, url: 'https://www.facebook.com/OficialOliviaAraujo/?locale=pt_BR' },

  ]}
/>
        </div>
      </div>

      {/* RENATO FARIAS */}
      <div className={styles.card}>
        <img src="/images/Renato.png" alt="Renato Farias" className={styles.image} />

        <div className={styles.content}>
          <h2 className={styles.title}>Renato Farias <span className={styles.subtitleInline}>(Direção)</span></h2>
          <p className={styles.paragraph}>
            Diretor artístico, ator, roteirista e dramaturgo da Companhia de Teatro Íntimo desde 2005; há 19 anos pesquisando uma linguagem própria que se refere à relação horizontal com a plateia, ao atuar com protagonistas da criação e à poesia como base de uma dramaturgia que potencializa o vínculo com o espectador, o lugar íntimo da cena.
          </p>
          <p className={styles.paragraph}>
            Desde 2019 dirige, também, o Complexo Negra Palavra, performance audiovisual e peça de exposição. Coordenador da pesquisa “Teatro Íntimo com a dissertação: O poema-cena” e do Teatro Íntimo: A Construção do Espetador.
          </p>
          <p className={styles.paragraph}>
            Ministrou oficinas de teatro pelo Ficrucuz; Los Brasil/Poema Visual; Coletivo Cais do Valongo; preparador corporal do espetáculo Castelo Branco; e Preparação para TV e Cinema pela Faculdade de Dança Angel Vianna.
          </p>
          <p className={styles.paragraph}>
            Professor de interpretação das Oficinas da Rede Globo Rio/SP, de 1995 a 2012. Instrutor de workshops ligados à linguagem poética.
          </p>
          <p className={styles.paragraph}>
            Roteirista, diretor e mentor de programas do Projeto Canal Saúde, do Canal Saúde, da CRUZ, desde 1995: Ciência & Letras, Estação Saúde, Em Família e Sala de Convidados.
          </p>
          <p className={`${styles.paragraph} ${styles.italic}`}>
  Disponível em:{' '}
  <a href="https://www.canalsaude.fiocruz.br" target="_blank" rel="noopener noreferrer">
    www.canalsaude.fiocruz.br
  </a>
</p>


          <IconGroup
  socialLinks={[
    { Icon: FaInstagram, url: 'https://instagram.com/renatofarias' },
    { Icon: FaFacebook, url: 'https://facebook.com/renatofarias' },
    { Icon: FaYoutube, url: 'https://youtube.com/renatofarias' },
    { Icon: FaTwitter, url: 'https://twitter.com/renatofarias' },
  ]}
/>
        </div>
      </div>
    </div>
  );
};

export default Elenco;