import Button from '../Button/Button';


function Project({titre, description,image}){
      return (
            <>
                  <div>
                        <img src={image}></img>
                  </div>
                  <div>
                        <h3>{titre}</h3>
                        <span>{description}</span>
                        <Button hash="" text="About this project"/>
                  </div>
            </>
      )
}

export default Project;