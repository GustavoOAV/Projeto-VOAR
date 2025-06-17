// Espetaculo.jsx
import React, { useState } from "react";
import styles from "./Espetaculo.module.css";
import useInView from "../hooks/useInView";

const Espetaculo = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const sectionClass = (isVisible) =>
    `${styles.sectionBase} ${isVisible ? styles.visible : styles.scrollHidden}`;

  const [ref1, vis1] = useInView();
  const [ref2, vis2] = useInView();
  const [ref3, vis3] = useInView();
  const [ref4, vis4] = useInView();
  const [ref5, vis5] = useInView();
  const [ref6, vis6] = useInView();
  const [ref7, vis7] = useInView();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>O Espetáculo</h1>

      <div ref={ref1} className={sectionClass(vis1)}>
        <div id="Espetaculo" className={styles.highlightSection}>
          <p>
            <em>Voar é o Que Me Põe de Pé</em> é inspirado e construído a partir
            de poemas de Geni Guimarães e da prosa de Marcelino Freire. O
            espetáculo bebe na sabedoria de transformar o cotidiano em poesia. O
            solo da atriz Olivia Araujo, com direção de Renato Farias, traz uma
            personagem-poeta que constrói seu universo através de memórias,
            saudades e tradições familiares delicadas e saborosas.
          </p>
        </div>
      </div>

      <div ref={ref2} className={sectionClass(vis2)}>
        <div className={styles.mainText}>
          <p>
            O tempo, o vento, os sons, os cansaços, as dores e os amores, para
            ela tudo é matéria prima para um pacto. A simplicidade é a base da
            construção do intimismo com a palavra poética, sem rebuscamentos
            que, por muito tempo, elitizaram a relação das pessoas com a poesia.
          </p>
        </div>
      </div>

      <div ref={ref3} className={sectionClass(vis3)}>
        <div className={styles.imageTextSection}>
          <div className={styles.textBlock}>
            <p>
              A partir da poesia de Geni Guimarães e da prosa de Marcelino
              Freire, a atriz Olivia Araujo leva ao palco o espetáculo{" "}
              <em>Voar é o Que Me Põe de Pé</em>. A sabedoria de transformar o
              cotidiano em poesia é o que a move. E quem vai dizer que não
              existe arte na simplicidade de quem lê a vida na fumaça do café?
            </p>
            <blockquote>
              "É o próprio Marcelino que explica: 'a trajetória de uma poeta
              defendendo o direito de cada palavra, o lirismo de suas escolhas.
              Aqui, na interpretação de Olivia Araujo, uma atriz que sabe o
              tamanho dos versos, o peso de cada gesto, a emoção à pele da
              flor.'"
            </blockquote>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/esp1.jpg"
              alt="Olivia Araujo em cena"
              className={styles.featuredImage}
              onClick={() => openModal("/images/esp1.jpg")}
            />
          </div>
        </div>
      </div>

      <div ref={ref4} className={sectionClass(vis4)}>
        <div className={styles.testimonial}>
          <p>
            A atriz relembra: "O Marcelino é um amigo de muitos anos. Já tive a
            alegria de montar textos dele algumas vezes. Juntou-se o convite do
            André Adoni com a vontade de trabalhar com o Renato Farias e surgiu
            essa oportunidade de visitar esse novo texto. Até porque ele se
            completa com a poesia da Geni, que me comove muito e coloca o poema
            ao alcance de todos."
          </p>
        </div>
      </div>

      <div ref={ref5} className={sectionClass(vis5)}>
        <div className={styles.gallery}>
          {["esp2.jpg", "esp3.jpg", "esp4.jpg"].map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`Cena do espetáculo ${i + 1}`}
              onClick={() => openModal(`/images/${img}`)}
            />
          ))}
        </div>
      </div>

      <div ref={ref6} className={sectionClass(vis6)}>
        <div className={styles.finalText}>
          <p>
            Acreditamos que a circulação do espetáculo{" "}
            <em>Voar é o Que Me Põe de Pé</em> possibilita uma aproximação maior
            com o público que já conhece e admira a arte através de seus
            trabalhos no teatro. A escolha pela linguagem do texto, pesquisada
            há 20 anos pela Companhia de Teatro Livre, oferece uma relação única
            com o público.
          </p>
          <p>
            O resgate da poesia de Geni Guimarães, amiga e contemporânea da
            escritora Conceição Evaristo, empresta uma importância ainda maior
            para o projeto. A escolha de prescindir de cenários complexos e
            investir no trabalho da atriz com o figurino e a iluminação para
            compor a estética do espetáculo, reforça que o fenômeno teatral
            ocorre na força da comunicação entre a arte e o público.
          </p>
        </div>
      </div>

      {modalImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <img
            src={modalImage}
            alt="Imagem ampliada"
            className={styles.modalImage}
          />
        </div>
      )}

      
        <div className={styles.technicalSheet}>
          <h2 className={styles.sectionTitle}>Ficha Técnica</h2>
          <div className={styles.technicalContent}>
            <div className={styles.technicalList}>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Atuação:</span>
                <span className={styles.technicalValue}>Olivia Araujo</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Poesia:</span>
                <span className={styles.technicalValue}>Geni Guimarães</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Prosa:</span>
                <span className={styles.technicalValue}>Marcelino Freire</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>
                  Dramaturgia e Direção:
                </span>
                <span className={styles.technicalValue}>Renato Farias</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Trilha Sonora:</span>
                <span className={styles.technicalValue}>Sérgio Pererê</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Iluminação:</span>
                <span className={styles.technicalValue}>Cleber Eli</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Figurino e Arte:</span>
                <span className={styles.technicalValue}>Thiago Mendonça</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Sapatos:</span>
                <span className={styles.technicalValue}>Virgínia Barros</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Preparação Vocal:</span>
                <span className={styles.technicalValue}>Marcelo Bofat</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>
                  Preparação Corporal:
                </span>
                <span className={styles.technicalValue}>Reinaldo Soares</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Fotografia:</span>
                <span className={styles.technicalValue}>Guilherme Lima</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Maquiagem:</span>
                <span className={styles.technicalValue}>André Sartori</span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Produção:</span>
                <span className={styles.technicalValue}>
                  Luz dos Meus Olhos Produções Artísticas
                </span>
              </div>
              <div className={styles.technicalRow}>
                <span className={styles.technicalLabel}>Duração:</span>
                <span className={styles.technicalValue}>50 minutos</span>
              </div>
            </div>
            <div className={styles.technicalImage}>
              <img
                src="/images/ficha.png"
                alt="Detalhe do espetáculo"
                className={styles.featuredImage}
                onClick={() => openModal("/images/ficha.png")}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Espetaculo;
