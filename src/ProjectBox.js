function ProjectBox(props) {
  return (
    <div className="box">
      <a href={props.link} className="image fit">
        <img src={props.imageSrc} alt={props.altText} />
      </a>
      <div className="inner">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} className="button fit">
          Demo
        </a>
      </div>
    </div>
  )
}

export default ProjectBox
