import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Layout, Github, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCarousel } from "./ProjectCarousel"

export function ProjectShowcase({ project }) {
  const getIconComponent = (iconName) => {
    const icons = {
      Layout: () => <Layout className="h-6 w-6 text-primary" />,
      Github: () => <Github className="h-6 w-6 text-primary" />,
      ExternalLink: () => <ExternalLink className="h-6 w-6 text-primary" />,
    }
    return icons[iconName]?.() || null
  }

  return (
    <div className="min-h-screen  p-2 sm:p-2 md:p-6 lg:p-8">
      <Card className="mx-auto max-w-7xl overflow-hidden">
        <CardHeader className="space-y-4 p-4 pb-0 md:p-6 md:pb-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{project.badge}</Badge>
              <Badge variant="outline">{project.year}</Badge>
            </div>
            <CardTitle className="mt-4 text-xl font-bold sm:text-2xl md:text-4xl">{project.title}</CardTitle>
            <CardDescription className="mt-2 text-base sm:text-lg">{project.description}</CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="mt-4 grid gap-6 p-4 md:mt-6 md:gap-8 md:p-6 grid-cols-1 lg:grid-cols-2">
          <ProjectCarousel images={project.images} />

          <Tabs defaultValue="overview" className="w-full">
            {/* Make tabs scrollable on mobile */}
            <TabsList className="w-full justify-start overflow-x-auto">
              <div className="flex min-w-full sm:min-w-0">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="problem">Problem</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </div>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Project Goals</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.goals}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Role & Duration</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {project.role} • {project.duration}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {project.features.map((feature) => (
                  <div key={feature.title} className="space-y-3">
                    {getIconComponent(feature.icon)}
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div> */}
            </TabsContent>

            {/* Update other tab contents with consistent spacing */}
            <TabsContent value="problem" className="mt-6">
              <div className="prose prose-gray dark:prose-invert">
                <h3 className="text-lg font-semibold">The Challenge</h3>
                <p className="text-sm sm:text-base">{project.problem}</p>
              </div>
            </TabsContent>

            <TabsContent value="solution" className="mt-6">
              <div className="prose prose-gray dark:prose-invert">
                <h3 className="text-lg font-semibold">The Solution</h3>
                <p className="text-sm sm:text-base">{project.solution}</p>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-6">
              <div className="prose prose-gray dark:prose-invert">
                <h3 className="text-lg font-semibold">Impact & Results</h3>
                <p className="text-sm sm:text-base">{project.results}</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 p-4 sm:flex-row md:p-6">
          {project.liveUrl && (
            <Button className="group w-full sm:w-auto " asChild>
              <a href={project.liveUrl}  target="_blank" rel="noopener noreferrer">
                View Live Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )}
          {project.processUrl && (
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a href={project.processUrl} target="_blank" rel="noopener noreferrer">
                View Process
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

