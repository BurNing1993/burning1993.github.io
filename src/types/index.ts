export interface Project {
    imgUrl: string
    name: string
    tags: string[]
    desc: string
    demoUrl?: string
    sourceCodeUrl?: string
    qrcodeUrl?: string
  }
  
  export interface ProjectItem {
    year: string
    projects: Project[]
  }