const Article = ({art,removeFunc}) => {
    return ( <div className="oneArticle"> 
    <input type="button" value="remove" onClick={()=>{removeFunc(art.id)}}/>
     <h3>{art.id}.  {art.title}</h3>
    <div>{art.body}</div>
    </div> );
}
 
export default Article;