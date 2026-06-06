import { useState, useEffect, useRef } from 'react';
const utm = "?utm_source=scrimba_degree&utm_medium=referral"


  const loadData = (options) => {
  fetch(options.url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){ 
       if (options.onSuccess) options.onSuccess(data)
    })
}



export default function App (props) {
  let [photo, setPhoto] = useState([]);
  
  // CHANGE THE THEME OF YOUR BACKGROUND COVER
  // E.G YOUR HOBBY, COUNTRY, INTEREST, OR JUST SOMETHING VISUALLY PLEASING 
  let [query, setQuery] = useState("Mountain");
  
  const queryInput = useRef(null);
  const url =
   "https://apis.scrimba.com/unsplash/photos/random/?orientation=landscape"
  useEffect(() => {
    const photoUrl = query ? `${url}&query=${query.split(" ").join("+")}` : url;
    loadData({
      url: photoUrl,
      onSuccess: res => {
        setPhoto(res);
      }
    });
  }, [query, url]);

  const searchPhotos = e => {
    e.preventDefault();
    setQuery(queryInput.current.value);
  };
  
  if (query && photo.id) {
    return (
      <div className="container">
        <div key={photo.id} className="item"> 
        <img
          className="img"
          src={photo.urls.regular}
        />
        <div className="red-border">
        </div>
        <div className="right-frame">
        
          {/* ADD YOUR PERSONAL DETAILS */}
          <h4 className="name first-name">Adrijus</h4>
          <h4 className="name last-name">Čiurinskas</h4>
          <div className="divider"></div>
          <h5 className="job-title">Full-stack Developer</h5>
          <h5 className="email">asciurinskas@gmail.com</h5>
          
        </div>
          <div className="caption">
          <span className="credits">Photo by 
            <a href={photo.user.links.html + utm}>   {photo.user.name} 
            </a>
            <span> on </span> 
            <a href={"https://unsplash.com" + utm}>
              Unsplash
            </a>
          </span>
        </div>
        </div>
      </div>
      )
    }
    else {
      return (<div></div>)
    }
}
