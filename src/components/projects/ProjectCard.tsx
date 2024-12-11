import { Project } from '@/types'
import React from 'react'
import Image from 'rc-image'
import 'rc-image/assets/index.css'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FlipHorizontal,
  FlipVertical,
  RotateCcwSquare,
  RotateCwSquare,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button, buttonVariants } from '../ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="px-2 py-1">
        <div className="font-semibold">{project.name}</div>
        <div className="flex gap-1 mt-2">
          {project.tags.map((t) => (
            <Badge variant="outline" key={t}>
              {t}
            </Badge>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Image
          src={project.imgUrl}
          placeholder
          preview={{
            icons: {
              rotateLeft: <RotateCcwSquare />,
              rotateRight: <RotateCwSquare />,
              zoomIn: <ZoomIn />,
              zoomOut: <ZoomOut />,
              close: <X />,
              left: <ArrowLeft />,
              right: <ArrowRight />,
              flipX: <FlipHorizontal />,
              flipY: <FlipVertical />,
            },
          }}
          style={{ objectFit: 'cover', height: '180px' }}
          alt={project.name}
        />
      </div>
      <div className="flex gap-1 px-2 py-1">
        {project.sourceCodeUrl && (
          <a
            href={project.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'link', size: 'sm' })}
          >
            源码
            <ExternalLink />
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'link', size: 'sm' })}
          >
            演示
            <ExternalLink />
          </a>
        )}
        {project.qrcodeUrl && (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">二维码</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <img src={project.qrcodeUrl} width="258" alt={project.name} />
            </HoverCardContent>
          </HoverCard>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
