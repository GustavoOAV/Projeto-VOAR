import React, { useState, useEffect } from "react";
import styles from "./Galeria.module.css";

const imagens = [
  "/images/G1.jpg", "/images/G2.jpg", "/images/G3.jpg",
  "/images/G4.jpg", "/images/G5.jpg", "/images/esp1.jpg",
  "/images/esp2.jpg", "/images/esp3.jpg", "/images/esp4.jpg",
  "/images/Crit4.jpg", "/images/Crit5.png", "/images/G13.jpg",
  "/images/G14.jpg", "/images/G15.jpg", "/images/G11.jpg",
  "/images/G10.jpg","/images/G6.jpg","/images/G7.jpg",
  "/images/G8.jpg","/images/G9.jpg","/images/G12.jpg",
  "/images/G16.jpg","/images/G17.jpg","/images/G18.jpg",
];

const Galeria = () => {
  const [imagemIndex, setImagemIndex] = useState(0);
  const [animar, setAnimar] = useState(false);
  const [miniaturasPorGrupo, setMiniaturasPorGrupo] = useState(6);

  
  useEffect(() => {
    const atualizarMiniaturas = () => {
      const largura = window.innerWidth;
      if (largura >= 1024) setMiniaturasPorGrupo(6);
      else if (largura >= 768) setMiniaturasPorGrupo(4);
      else setMiniaturasPorGrupo(2);
    };

    atualizarMiniaturas();
    window.addEventListener("resize", atualizarMiniaturas);
    return () => window.removeEventListener("resize", atualizarMiniaturas);
  }, []);

  const mudarImagem = (novoIndex) => {
    setAnimar(true);
    setTimeout(() => {
      setImagemIndex(novoIndex);
      setAnimar(false);
    }, 100);
  };

  const proximo = () => {
    mudarImagem((imagemIndex + 1) % imagens.length);
  };

  const anterior = () => {
    mudarImagem((imagemIndex - 1 + imagens.length) % imagens.length);
  };

  const grupoAtual = Math.floor(imagemIndex / miniaturasPorGrupo);
  const inicio = grupoAtual * miniaturasPorGrupo;
  const fim = inicio + miniaturasPorGrupo;
  const miniaturasVisiveis = imagens.slice(inicio, fim);

  return (
    <section id="galeria" className={styles.container}>
      <h2 className={styles.titulo}>Galeria de Fotos</h2>

      <div className={styles.principal}>
        <button className={styles.seta} onClick={anterior}>❮</button>
        <img
          src={imagens[imagemIndex]}
          alt={`Imagem ${imagemIndex + 1}`}
          className={`${styles.imagemPrincipal} ${animar ? styles.fade : ""}`}
        />
        <button className={styles.seta} onClick={proximo}>❯</button>
      </div>

      <div className={styles.miniaturas}>
        {miniaturasVisiveis.map((src, index) => {
          const realIndex = inicio + index;
          return (
            <img
              key={realIndex}
              src={src}
              alt={`Miniatura ${realIndex + 1}`}
              className={`${styles.miniatura} ${realIndex === imagemIndex ? styles.ativa : ""}`}
              onClick={() => mudarImagem(realIndex)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Galeria;
