import { useEffect, useState } from 'react';
import {
  addComment,
  deleteComment,
  getCommentsByPost,
  getUserId,
  likeComment,
  unlikeComment
} from '../services/commentService';
import styles from './Comments.module.css';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [likingId, setLikingId] = useState(null);
  const [myDeleteCodes, setMyDeleteCodes] = useState({});
  const [currentUserId, setCurrentUserId] = useState('');

 useEffect(() => {
  // Mova a definição de loadComments para dentro do useEffect
  const loadComments = async () => {
    try {
      setLoading(true);
      const commentsData = await getCommentsByPost(postId);
      setComments(commentsData);
    } catch (error) {
      console.error('Erro ao carregar comentários:', error);
    } finally {
      setLoading(false);
    }
  };

  loadComments();
  loadDeleteCodes();
  setCurrentUserId(getUserId());
}, [postId]);

  const loadComments = async () => {
    try {
      setLoading(true);
      const commentsData = await getCommentsByPost(postId);
      setComments(commentsData);
    } catch (error) {
      console.error('Erro ao carregar comentários:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadDeleteCodes = () => {
    if (typeof window !== 'undefined') {
      const savedCodes = JSON.parse(localStorage.getItem('myComments') || '{}');
      setMyDeleteCodes(savedCodes);
    }
  };

  const canDeleteComment = (comment) => {
    return myDeleteCodes[comment.id] === comment.deleteCode;
  };

  const hasUserLiked = (comment) => {
    if (!comment.likes || !Array.isArray(comment.likes)) return false;
    return comment.likes.includes(currentUserId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !authorName.trim()) {
      alert('Por favor, preencha seu nome e o comentário!');
      return;
    }

    try {
      setLoading(true);
      
      await addComment(postId, {
        authorName: authorName.trim(),
        content: newComment.trim()
      });

      setNewComment('');
      setAuthorName('');
      await loadComments();
      loadDeleteCodes();
      
    } catch (error) {
      console.error('Erro ao enviar comentário:', error);
      alert('Erro ao enviar comentário. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('Tem certeza que deseja apagar este comentário?')) {
      return;
    }

    try {
      setDeletingId(commentId);
      const deleteCode = myDeleteCodes[commentId];
      await deleteComment(commentId, deleteCode);
      
      setComments(comments.filter(comment => comment.id !== commentId));
      
    } catch (error) {
      console.error('Erro ao apagar comentário:', error);
      alert('Erro ao apagar comentário.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleLike = async (commentId, alreadyLiked) => {
    try {
      setLikingId(commentId);
      
      if (alreadyLiked) {
        await unlikeComment(commentId, currentUserId);
      } else {
        await likeComment(commentId, currentUserId);
      }
      
      await loadComments();
      
    } catch (error) {
      console.error('Erro ao curtir comentário:', error);
    } finally {
      setLikingId(null);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comentários</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Seu nome"
          disabled={loading}
          className={styles.input}
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Deixe seu comentário..."
          rows={4}
          disabled={loading}
          className={styles.textarea}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className={styles.button}
        >
          {loading ? 'Enviando...' : 'Publicar Comentário'}
        </button>
      </form>

      <div className={styles.list}>
        {loading && <div className={styles.loading}>Carregando comentários...</div>}
        
        {comments.map(comment => {
          const alreadyLiked = hasUserLiked(comment);
          const likesCount = Array.isArray(comment.likes) ? comment.likes.length : 0;
          
          return (
            <div key={comment.id} className={styles.card}>
              
              {/* Ícone de lixeira no canto superior direito */}
              {canDeleteComment(comment) && (
                <div className={styles.deleteMessage}>
                  <button 
                    onClick={() => handleDeleteComment(comment.id)}
                    disabled={deletingId === comment.id}
                    title="Apagar comentário"
                  >
                    {deletingId === comment.id ? '⏳' : '🗑️'}
                  </button>
                </div>
              )}

              <div className={styles.header}>
                <div>
                  <span className={styles.author}>{comment.authorName}</span>
                  <span className={styles.date}>
                    {comment.createdAt?.toDate?.().toLocaleDateString('pt-BR') || 'Data indisponível'}
                  </span>
                </div>
              </div>
              
              <p className={styles.content}>{comment.content}</p>
              
              <div className={styles.footer}>
                <button 
                  onClick={() => handleLike(comment.id, alreadyLiked)}
                  disabled={likingId === comment.id}
                  className={`${styles.likeButton} ${alreadyLiked ? styles.liked : ''}`}
                >
                  <span className={styles.likeCount}>{likesCount}</span>
                  {alreadyLiked ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          );
        })}

        {comments.length === 0 && !loading && (
          <div className={styles.empty}>
            <p>Seja o primeiro a comentar!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;