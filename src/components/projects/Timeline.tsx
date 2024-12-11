import { ProjectItem } from '@/types'
import React from 'react'
import ProjectCard from './ProjectCard'

interface Props {
  items: ProjectItem[]
}

const TimelineItem: React.FC<{ item: ProjectItem }> = ({ item }) => (
  <div className="flex items-stretch gap-4 text-primary">
    <div className="text-lg font-semibold leading-none">{item.year}</div>
    <div className="w-[1px] bg-blue-500/80 relative">
      <div className="absolute w-5 h-5 rounded-full bg-blue-500 top-0 -left-[9px]"></div>
    </div>
    <div className="flex-1 pb-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {item.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
)

const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Timeline
