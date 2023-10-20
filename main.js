import { getComments } from "./api.js";
import { renderComments } from "./renderComments.js";

// Массив данных из хранилища
export let comments = [];

export const setComments = (newComments) => {
  comments = newComments;
}

// GET
export const fetchAndRenderComments = () => {
  getComments().then((responseData) => {
    comments = responseData.comments.map((comment) => {
      return {
        name: comment.author.name,
        date: comment.date,
        text: comment.text,
        likes: comment.likes,
      };
    });
    renderComments();
  });
};

fetchAndRenderComments();







