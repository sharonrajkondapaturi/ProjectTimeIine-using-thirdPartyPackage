import {
  ProjectContainer,
  ProjectStartLine,
  ProjectTitle,
  Duration,
  Description,
  ProjectImage,
  HighLightDuration,
  Visit,
} from './styledComponent'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {project} = props
  const {projectUrl, description, imageUrl, duration, projectTitle} = project
  return (
    <ProjectContainer>
      <ProjectImage src={imageUrl} alt="project"/>
      <ProjectStartLine>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <HighLightDuration>
          <AiFillCalendar color="#171f46" />
          <Duration>{duration}</Duration>
        </HighLightDuration>
      </ProjectStartLine>
      <Description>{description}</Description>
      <Visit href={projectUrl}>Visit</Visit>
    </ProjectContainer>
  )
}

export default ProjectTimelineCard
