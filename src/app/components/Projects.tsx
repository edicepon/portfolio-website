'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'
import { useState } from 'react'

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleDescription = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title)
  }

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          {...fadeInUp}
        >
          Click on the dropdowns to view a description and the thought process behind each project.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => toggleDescription(project.title)}
                  className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Thought Process</span>
                  {expandedProject === project.title ? (
                    <FaChevronUp className="h-4 w-4" />
                  ) : (
                    <FaChevronDown className="h-4 w-4" />
                  )}
                </motion.button>
              </motion.div>
              <AnimatePresence>
                {expandedProject === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-dark/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Project Details</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.title === 'Conversational AI Therapist and Biographer' && 
                          'The development process began with extensive research into psychological frameworks (CBT, DBT) and therapeutic protocols. We first implemented GPT-3.5 for initial conversation generation, then enhanced it with a RAG model to incorporate over 10,000 therapeutic protocols and clinical guidelines. For voice interaction, we integrated Whisper and SpeechRecognition for real-time speech processing, followed by Eleven Labs for natural voice synthesis. The system was optimized through reinforcement learning and fine-tuned using anonymized therapy transcripts. Finally, we deployed the solution via Twilio\'s telephony infrastructure, creating an accessible mental health support system that combines cutting-edge AI with established therapeutic practices.'}
                        {project.title === 'AI-Powered Cancer Prognosis System' && 
                          'The project began with comprehensive data integration, building a knowledge graph system using Neo4j to connect fragmented clinical data. We engineered predictive models using TensorFlow and scikit-learn, implementing SVM, Random Forest, and Vision Transformer architectures to achieve 96% accuracy in cancer subtype classification. The system was trained on diverse oncology data including omics and radiomics, with performance optimization through reinforcement learning for treatment simulations. We designed a full-stack pipeline from data acquisition (web scraping, EHR integration) to deployment via cloud APIs, enabling integration with existing healthcare systems.'}
                        {project.title === 'Task Management Focus App' && 
                          'The project was born from personal experience during the COVID-19 pandemic, where I noticed a significant increase in social media usage affecting productivity and mental well-being. This observation led to the development of a mobile task management system with an integrated social media limiting feature. To implement the blocking functionality, I utilized Android\'s Digital Wellbeing API and iOS\'s Screen Time API to monitor and control app usage. The app tracks time spent on each social media platform using native system APIs, with the blocking mechanism implemented through system-level app restrictions and custom notification management. I also incorporated a notification system that warns users when they\'re approaching their daily limit, and implemented a "focus mode" that can be activated for deep work sessions, which temporarily disables notifications and restricts access to social media apps.'}
                        {project.title === 'Portfolio Website' && 
                          'Built a modern portfolio website with smooth animations and responsive design. Implemented dark mode and optimized for performance and accessibility.'}
                        {project.title === 'Stock Market Predictor' && 
                          'The project began with extensive research into various data sources and prediction methodologies. For data collection, I implemented multiple approaches: real-time market data through Yahoo Finance API and Alpha Vantage, historical price data using web scraping with BeautifulSoup and Selenium, and sentiment analysis by aggregating news articles and social media posts through NewsAPI and Twitter API. I developed a custom ETL pipeline using Pandas to process and normalize the diverse data sources, incorporating technical indicators like RSI, MACD, and Bollinger Bands. The prediction model was built using TensorFlow, implementing an LSTM neural network architecture that could capture both short-term and long-term market patterns. I trained the model on 10 years of historical data, using a 70-15-15 split for training, validation, and testing. To improve accuracy, I implemented ensemble methods combining multiple models (Random Forest, XGBoost, and LSTM) and incorporated sentiment analysis scores as additional features. The system was deployed as a Streamlit web application, providing real-time predictions and trading signals. I also implemented a backtesting framework to validate the model\'s performance against historical data, achieving an average prediction accuracy of 78% for 5-day forecasts.'}
                        {project.title === 'Regional COVID-19 Tracker App' && 
                          'The project began with the challenge of collecting accurate, real-time COVID-19 data at a regional level. I developed a data pipeline that combined multiple sources: web scraping of local health department websites using Python\'s BeautifulSoup and Selenium, API integration with state health department databases, and manual data verification from official press releases. To handle the diverse data formats and update frequencies, I implemented a custom ETL process that normalized the data into a consistent format. The mobile app was built using React Native for cross-platform compatibility, featuring interactive maps powered by Google Maps SDK and real-time data visualization using React Native Charts. I implemented push notifications using Firebase Cloud Messaging to alert users of significant changes in their region\'s statistics. The backend architecture was designed to handle high traffic during critical updates, with a caching layer implemented using Firebase Realtime Database to ensure fast data delivery while maintaining accuracy. The app also included offline support, allowing users to access previously loaded data even without an internet connection.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 