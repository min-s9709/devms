'use client'

import { motion } from 'framer-motion'
import { projectData } from '@/data/projects'
import ProjectCard from '@/components/home/project/ProjectCard'

export default function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ease: 'easeInOut', y: { duration: 0.5 }, duration: 1.3 }}
      className='grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'
    >
      {projectData.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </motion.div>
  )
}