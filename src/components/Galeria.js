import React, { useState } from "react";
import styles from "./Galeria.module.css";

const imagens = [
   "/images/G1.jpg",
    "/images/G2.jpg",
    "/images/G3.jpg",
    "/images/G4.jpg",
    "/images/G5.jpg",
    "/images/esp1.jpg",
    "/images/esp2.jpg",
    "/images/esp3.jpg",
    "/images/esp4.jpg",
    "/images/G10.jpg",
    "/images/G11.jpg",
    "/images/G12.jpg",
    "/images/G13.jpg",
    "/images/G14.jpg",
    "/images/G15.jpg",
];

const Galeria = () => {
  const [imagemIndex, setImagemIndex] = useState(null);

  const abrirModal = (index) => {
    setImagemIndex(index);
  };

  const fecharModal = () => {
    setImagemIndex(null);
  };

  const anterior = (e) => {
    e.stopPropagation();
    setImagemIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = (e) => {
    e.stopPropagation();
    setImagemIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className={styles.container}>
      <h2 className={styles.titulo}>Galeria de Fotos</h2>
      <div className={styles.grid}>
        {imagens.map((src, index) => (
          <div className={styles.card} key={index} onClick={() => abrirModal(index)}>
            <img src={src} alt={`Foto ${index + 1}`} className={styles.imagem} />
          </div>
        ))}
      </div>

      {imagemIndex !== null && (
        <div className={styles.modal} onClick={fecharModal}>
          <div className={styles.modalContent}>
            <button className={styles.seta} onClick={anterior}>❮</button>
            <img
              src={imagens[imagemIndex]}
              alt={`Imagem ${imagemIndex + 1}`}
              className={styles.imagemAmpliada}
            />
            <button className={styles.seta} onClick={proximo}>❯</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
