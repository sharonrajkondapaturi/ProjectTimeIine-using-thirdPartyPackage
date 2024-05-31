import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {ResponsiveContainer, Heading, CCBP} from './styledComponent'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard course={item} />
    }
    return <ProjectTimelineCard project={item} />
  }
  return (
    <ResponsiveContainer>
      <Heading>MY JOURNEY OF CCBP 4.0</Heading>
      <Chrono
        items={timelineItemsList}
        theme={{secondary: 'White'}}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
      </Chrono>
    </ResponsiveContainer>
  )
}
export default TimelineView
