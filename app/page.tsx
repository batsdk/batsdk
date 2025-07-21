"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const techStack = [
    { name: "Next.js", icon: "⚡", color: "from-gray-900 to-gray-700" },
    { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-400" },
    { name: "Nest.js", icon: "🚀", color: "from-emerald-500 to-teal-500" },
    { name: "Golang", icon: "🐹", color: "from-cyan-400 to-blue-500" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600" },
    { name: "Redis", icon: "📦", color: "from-emerald-600 to-green-500" },
    { name: "Kotlin", icon: "🎯", color: "from-teal-500 to-emerald-500" },
    { name: "Azure", icon: "☁️", color: "from-gray-900 to-gray-700" },
  ]

  const projects = [
    {
      title: "Q-LMS",
      description:
        "A full-featured Learning Management System enabling student performance tracking, biometric attendance via fingerprint devices, and seamless Zoom integration with secure video recordings and controlled access.",
      tech: ["Next.js", "Railway", "PostgreSQL", "Redis"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    },
    {
      title: "Q-POS",
      description:
        "A scalable, real-time Point of Sale solution designed for multi-role access and inventory management. Includes daily sales tracking, cashier management, and offline-ready transaction support with Redis caching.",
      tech: ["Nest.js", "Next.js", "Railway", "PostgreSQL", "Redis"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    },
    {
      title: "EV Pay (OCCP Payment Integration)",
      description:
        "A high-performance payment microservice built for an EV charging platform, integrating a leading Sri Lankan payment gateway with OCCP protocol, WebSocket connectivity, and robust Redis-based session handling.",
      tech: ["Redis", "Golang", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    },
    {
      title: "AutoFleet",
      description:
        "An Android-native business management app for vehicle service centers, enabling tracking of service history, payments, customer data, budget planning, and vehicle lifecycle — powered by a secure backend and real-time updates.",
      tech: ["Kotlin", "Nest.js", "Railway", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    },
    {
      title: "RedOp (Web Extension)",
      description:
        "A lightweight Web extension built for Reddit users that replaces the text `/OP` with the original poster’s username in comments. Enhances context in discussions with zero manual effort.",
      tech: ["TypeScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    },
    {
      title: "Pulse-Q",
      description:
        "Pulse-Q is a highly scalable reminder and notification system designed to deliver personalized messages via SMS and WhatsApp. Built with NestJS, Redis, and BullMQ, it leverages advanced behavioral segmentation powered by Mixpanel analytics to optimize scheduling and maximize user engagement.",
      tech: ["NestJS", "Redis", "BullMQ", "Twilio", "Mixpanel"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      live: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white text-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-300/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-200/15 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent"
            >
              SK
            </motion.div>
            <div className="flex space-x-8">
              {["About", "Tech", "Projects", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <motion.div style={{ y }} className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              Shemil Kaweesha
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Not the developer you asked for, but the one your project deserves — full-stack builds done right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-emerald-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="backdrop-blur-md bg-white/70 rounded-3xl p-8 border border-emerald-200 shadow-2xl shadow-emerald-100/50">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a full-stack developer who treats every project like Gotham on a deadline. With a strong foundation in both frontend and backend,
                I create scalable applications that are fast, clean, and built to last. I believe code should be smart, maintainable, and maybe a little intimidating
                like a quiet developer in a dark hoodie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-gray-500 text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/70 border-emerald-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl mb-4 p-4 rounded-2xl bg-gradient-to-br ${tech.color} inline-block`}>
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-lg">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/70 border-emerald-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-400 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-500 text-lg mb-12">Ready to bring your ideas to life? Let's work together!</p>

            <div className="backdrop-blur-md bg-white/70 rounded-3xl p-8 border border-emerald-200 shadow-2xl shadow-emerald-100/50">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  shemil.business@gmail.com
                </Button>
                <div className="flex gap-4">
                  <a href="https://github.com/batsdk" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-emerald-400 text-emerald-600 hover:bg-emerald-50 rounded-full bg-transparent"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/batsdk" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      variant="outline"
                      className="border-emerald-400 text-emerald-600 hover:bg-emerald-50 rounded-full bg-transparent"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-emerald-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">© 2025 Batsdk. Built with code, curiosity, and a touch of Gotham-inspired determination.</p>
        </div>
      </footer>
    </div>
  )
}
