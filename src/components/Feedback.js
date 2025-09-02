import { useState } from 'react';
import styles from "./Feedback.module.css";

export default function Feedback() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [estrelas, setEstrelas] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const enviarFeedback = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.exemplo.com/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, comentario, estrelas }),
      });

      if (response.ok) {
        setMensagem('Feedback enviado com sucesso!');
        setNome('');
        setEmail('');
        setComentario('');
        setEstrelas(0);
      } else {
        setMensagem('Erro ao enviar feedback. Tente novamente.');
      }
    } catch (error) {
      setMensagem('Erro ao enviar feedback. Tente novamente.');
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <h2>Deixe sua avaliação</h2>
      <form onSubmit={enviarFeedback} className={styles.feedbackForm}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Escreva seu comentário..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          required
        ></textarea>

        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= estrelas ? styles.starSelected : styles.star}
              onClick={() => setEstrelas(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button type="submit">Enviar Avaliação</button>
      </form>
      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
}
