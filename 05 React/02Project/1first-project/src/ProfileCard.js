function ProfileCard(props) {
  const { title, handle, img, description } = props;
  return (
    <div className="card">
      <div className="card-image">
        <figure classname="image is-1by1">
          <img src={img} alt="ProfileCardImage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-5">{handle}</p>
          <p className="content">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
