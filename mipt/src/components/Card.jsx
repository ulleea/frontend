import {useState, useEffect} from 'react';
import './Card.scss';
import { getComments } from "./get_comments_by_article";
import { Comment } from "./Comments";

export function Card(props) {
        const { post } = props;
        const [comments, setComments] = useState([]);
        const [likes, setLikes] = useState(0);
        const [isLiked, setIsLiked] = useState(false);
        const [isShowComments, setIsShowComments] = useState(false);
        const [commentStr, setCommentStr] = useState("Показать комментарии");


        useEffect(() => {
            setLikes(post.currentLikes);
          }, []);
        
          useEffect(() => {
            getComments(post.articleId).then((fetchedData) => {
              setComments(fetchedData);
            });
          }, []);
        
          const changeLikes = () => {
            if (!isLiked) {
              setIsLiked(true);
              setLikes(likes + 1);
            }
            if (isLiked) {
              setIsLiked(false);
              setLikes(likes - 1);
            }
          };
          const showComments = () => {
            if (!isShowComments) {
              setIsShowComments(true);
              setCommentStr("Скрыть комментарии");
            } else {
              setIsShowComments(false);
              setCommentStr("Показать комментарии");
            }
          };
        
          return (
            <div className = "card">
              <h2>{post.title}</h2>
              <h3>{post.text}</h3>
              <div className='likesCounter'>Лайки : {likes}</div>
              <button className={isLiked ? 'like likeButton' : 'whiteLike likeButton'} onClick={changeLikes}></button>
              <div>{!isLiked}</div>
              <div className='boxComment'>
                <div className='titleComment'>Комментарии : {post.commentsCount}</div>
                <button className="checkComments" onClick={showComments}>
                  {commentStr}
                </button>
                </div>
                <div>
                  {comments && isShowComments &&
                    comments.map((comment) => <Comment comment={comment}></Comment>)}
                </div>
            </div>
          );
        }