import { projects } from '@/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: { id: string }
}

type ExpandedContent = {
  overview?: string[];
  features?: string[];
  technical?: string[];
  challenges?: string[];
  link?: string;
  githubLink?: string;
  stats?: { [key: string]: string };
  [key: string]: any;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === parseInt(params.id)) as (typeof projects)[number] & { expandedContent?: ExpandedContent };
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.des}
          </p>
        </div>
      </div>

      {/* Project Image */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[50vh] rounded-3xl overflow-hidden bg-[#13162d] border border-white/[0.2]">
            <img src="/bg.png" alt="bg-img" className="w-full h-full object-cover"/>
            <img 
              src={`/${project.img}`} 
              alt={project.title}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Project Overview */}
            <div className="border border-white/[0.2] rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
              {project.expandedContent?.overview && project.expandedContent.overview.length > 0 ? (
                <div className="space-y-4">
                  {project.expandedContent.overview.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-300 leading-relaxed">
                  {project.des}
                </p>
              )}
            </div>

            {/* Key Features */}
            {project.expandedContent?.features && project.expandedContent.features.length > 0 && (
              <div className="border border-white/[0.2] rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.expandedContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-300 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions (moved below Technical) */}
            {project.expandedContent?.challenges && project.expandedContent.challenges.length > 0 && (
              <div className="border border-white/[0.2] rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.expandedContent.challenges.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}


            {/* Gallery Section (moved up) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="w-full col-span-full mt-0 mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="w-full aspect-square bg-[#181b2b] rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
                      <img
                        src={`/${img}`}
                        alt={`Gallery image ${idx + 1}`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Implementation (moved below Gallery) */}
            {project.expandedContent?.technical && project.expandedContent.technical.length > 0 && (
              <div className="border border-white/[0.2] rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Technical Implementation</h2>
                <div className="space-y-4">
                  {project.expandedContent.technical.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Tech Stack */}
            <div className="border border-white/[0.2] rounded-3xl p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {project.iconLists.map((icon, index) => (
                  <div 
                    key={index} 
                    className="w-12 h-12 rounded-xl bg-black/50 border border-white/20 flex justify-center items-center"
                  >
                    <img src={`/${icon}`} alt={icon} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.link && (
              <div className="border border-white/[0.2] rounded-3xl p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors p-3 rounded-xl bg-black/30 hover:bg-black/50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
                
                {project.expandedContent?.githubLink && (
                  <a
                    href={project.expandedContent.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-blue-300 hover:text-blue-200 transition-colors p-3 rounded-xl bg-black/30 hover:bg-black/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>)}

            {/* Project Stats */}
            {project.expandedContent?.stats && (
              <div className="border border-white/[0.2] rounded-3xl p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Project Stats</h3>
                <div className="space-y-3">
                  {Object.entries(project.expandedContent.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-blue-300 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === parseInt(params.id))
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Alvin's Portfolio`,
    description: project.des,
  }
}
