import {AiFillClockCircle} from 'react-icons/ai'
import {
  CourseContainer,
  CourseStartLine,
  CourseTitle,
  Duration,
  Description,
  Tags,
  HighLightDuration,
  TagList,
} from './styledComponent'

const CourseTimelineCard = props => {
  const {course} = props
  const {courseTitle, description, tagsList, duration} = course
  return (
    <CourseContainer>
      <CourseStartLine>
        <CourseTitle>{courseTitle}</CourseTitle>
        <HighLightDuration>
          <AiFillClockCircle color="#171f46" />
          <Duration>{duration}</Duration>
        </HighLightDuration>
      </CourseStartLine>
      <Description>{description}</Description>
      <Tags>
        {tagsList.map(eachTag => (
          <TagList key={eachTag.id}>{eachTag.name}</TagList>
        ))}
      </Tags>
    </CourseContainer>
  )
}

export default CourseTimelineCard
