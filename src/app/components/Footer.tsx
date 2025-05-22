'use client'

import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark/50 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0"
            {...fadeInUp}
          >
            {new Date().getFullYear()}
          </motion.p>
          
          <motion.div 
            className="flex space-x-6"
            {...fadeInUp}
          >
            <motion.a
              href="https://github.com/edicepon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 