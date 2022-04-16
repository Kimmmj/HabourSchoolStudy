export function ProfileCard({
  name = "Name",
  age = 30,
  instagramLink = "https//instagram.com",
  twitterLink = "https//twitter.com",
  description = "Hello : )",
  imagePath = "/images/caroll.jpeg"
}) {
  // console.log("props", props);

  // const {
  //   name = "Name",
  //   age = 30,
  //   instagramLink = "https//instagram.com",
  //   twitterLink = "https//twitter.com",
  //   description = "Hello : )",
  //   imagePath = "/images/caroll.jpeg"
  // } = props;
  console.log("name", name);

  return (
    <div className="card">
      <img src={imagePath} className="profile-img" />

      <div className="info">
        <div>
          <h2>{name}</h2>
          <h3>Age - {age}</h3>
        </div>

        <div>
          <a href={instagramLink} target="_blank">
            Instagram
          </a>
          <a href={twitterLink} target="_blank">
            Twitter
          </a>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}
