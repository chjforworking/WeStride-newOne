function ProfileCard(props) {
  const { title, handle, img } = props;
  return (
    <div>
      <img src={img} alt="ProfileCardImage" />
      <h2>Title is {title}</h2>
      <h4>Handle is {handle}</h4>
    </div>
  );
}

export default ProfileCard;
