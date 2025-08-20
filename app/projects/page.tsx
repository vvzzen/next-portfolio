import RecentProjects from '@/components/ui/RecentProjects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20">
        <RecentProjects />
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Projects - Alvin\'s Portfolio',
  description: 'Explore my recent projects and technical work',
}
