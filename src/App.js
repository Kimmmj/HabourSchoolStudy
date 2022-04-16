import { ProfileCard } from "./ProfileCard";
import "./styles.css";

export default function App() {
  return (
    <>
      <ProfileCard />
      <ProfileCard
        name="Caroll"
        age={23}
        description="Hi!"
        instagramLink="https://www.instagram.com/caroll"
        twitterLink="https://www.twitter.com/caroll"
        imagePath="/images/caroll.jpeg"
      />
      <br />
      <ProfileCard
        name="John"
        age={27}
        description="Hello!"
        instagramLink="https://www.instagram.com/john"
        twitterLink="https://www.twitter.com/john"
        imagePath="/images/john.jpeg"
      />
      <br />
      <ProfileCard
        name="Sara"
        age={31}
        description="Bonjour!"
        instagramLink="https://www.instagram.com/sara"
        twitterLink="https://www.twitter.com/sara"
        imagePath="/images/sara.jpeg"
      />
    </>
  );
}

// ProfileCard.defaultProps = {
//   // name: "Name",
//   // age: 30,
//   description: "Hello :)",
//   instagramLink: "https://instagram.com",
//   twitterLink: "https://twitter.com",
//   imagePath: "/images/caroll.jpeg"
// };
