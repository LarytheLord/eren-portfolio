export interface Project {
    id: number
    title: string
    description: string
    category: 'web' | 'mobile' | 'ai'
    demo: string
    code: string
    skills: string[]
    image?: string
  }
  
  export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'tools'
  }
  
  export interface Experience {
    title: string
    company: string
    period: string
    description: string
  }
  
  export interface SocialLink {
    platform: string
    url: string
    icon: string
  }