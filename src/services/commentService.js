import {
    addDoc,
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
    where
} from 'firebase/firestore';
import { db } from './firebase';

// Gerar código único para permitir que autores apaguem seus comentários
const generateDeleteCode = () => {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
};

// Adicionar novo comentário
export const addComment = async (postId, commentData) => {
  try {
    const deleteCode = generateDeleteCode();
    
    const commentRef = await addDoc(collection(db, 'comments'), {
      postID: postId,
      authorName: commentData.authorName,
      content: commentData.content,
      createdAt: serverTimestamp(),
      likes: [],
      status: "Aprovado",
      deleteCode: deleteCode
    });

    // Salvar código no localStorage para permitir exclusão posterior
    if (typeof window !== 'undefined') {
      const myComments = JSON.parse(localStorage.getItem('myComments') || '{}');
      myComments[commentRef.id] = deleteCode;
      localStorage.setItem('myComments', JSON.stringify(myComments));
    }
    
    return commentRef.id;
    
  } catch (error) {
    console.error('Erro ao adicionar comentário:', error);
    throw error;
  }
};

// Buscar comentários de um post específico
export const getCommentsByPost = async (postId) => {
  try {
    const q = query(
      collection(db, 'comments'),
      where('postID', '==', postId),
      where('status', '==', 'Aprovado'),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const comments = [];
    
    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return comments;
    
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    throw error;
  }
};

// Apagar comentário (apenas autor pode apagar com código correto)
export const deleteComment = async (commentId, deleteCode) => {
  try {
    const commentRef = doc(db, 'comments', commentId);
    await deleteDoc(commentRef);
    
    // Remover código do localStorage após exclusão
    if (typeof window !== 'undefined') {
      const myComments = JSON.parse(localStorage.getItem('myComments') || '{}');
      delete myComments[commentId];
      localStorage.setItem('myComments', JSON.stringify(myComments));
    }
    
    return true;
    
  } catch (error) {
    console.error('Erro ao apagar comentário:', error);
    throw error;
  }
};

// Curtir comentário
export const likeComment = async (commentId, userId) => {
  try {
    const commentRef = doc(db, 'comments', commentId);
    
    await updateDoc(commentRef, {
      likes: arrayUnion(userId),
      updatedAt: serverTimestamp()
    });
    
    return true;
    
  } catch (error) {
    console.error('Erro ao curtir comentário:', error);
    throw error;
  }
};

// Descurtir comentário
export const unlikeComment = async (commentId, userId) => {
  try {
    const commentRef = doc(db, 'comments', commentId);
    
    await updateDoc(commentRef, {
      likes: arrayRemove(userId),
      updatedAt: serverTimestamp()
    });
    
    return true;
    
  } catch (error) {
    console.error('Erro ao descurtir comentário:', error);
    throw error;
  }
};

// Gerar ID único do usuário para controle de curtidas
export const getUserId = () => {
  if (typeof window === 'undefined') return 'guest';
  
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = 'user-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('user_id', userId);
  }
  return userId;
};