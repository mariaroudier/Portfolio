import Button from '../Button/Button';

function Project({titre, description,image}){

      return (
            <div className='project'>
                  <img src={image}></img>
                  <div className='project_text'>
                        <h3>{titre}</h3>
                        <span>{description}</span>
                        <Button hash="" text="About this project"/>
                  </div>
            </div>
      )
}

export default Project;