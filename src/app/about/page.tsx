'use client'

import { FaCode, FaLaptopCode, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a Full Stack Developer and AI/ML Engineer specializing in healthcare applications and research. 
          With expertise in developing predictive models, conversational AI systems, and knowledge graphs, 
          I combine machine learning techniques with clinical research insights to create impactful solutions. 
          My work spans from building cancer prognosis models to developing voice-enabled therapy tools, 
          always focusing on bridging the gap between technology and practical healthcare applications.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>JavaScript / TypeScript</li>
              <li>Java</li>
              <li>C++</li>
              <li>Python</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytical Tools</h3>
            <ul className="text-secondary space-y-2">
              <li>MATLAB</li>
              <li>Python (Pandas)</li>
              <li>NumPy</li>
              <li>SciPy</li>
              <li>Matplotlib/Seaborn</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaChartLine className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <ul className="text-secondary space-y-2">
              <li>Statistical Testing</li>
              <li>Pre-Post Intervention Analysis</li>
              <li>Data Aggregation</li>
              <li>Data Cleaning (Pandas)</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Chief Technology Officer</h3>
            <p className="text-primary mb-2">HealthAI • 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led a team of 3 in developing AI systems for healthcare applications, including cancer prognosis models and conversational therapy tools, combining ML techniques with clinical research insights</li>
              <li>Engineered predictive models using Python (TensorFlow, scikit-learn) to classify cancer subtypes with 96% accuracy and predict treatment outcomes, implementing SVM, Random Forest, and Vision Transformer architectures</li>
              <li>Developed voice-enabled AI therapist with real-time speech processing (Whisper, SpeechRecognition) and dynamic response generation (GPT-3.5), deployed via telephony APIs (Twilio) for accessible mental health support</li>
              <li>Built knowledge graph systems (Neo4j) to integrate fragmented clinical data for cancer research while scraping and incorporating 10K+ therapeutic protocols into NLP models</li>
              <li>Optimized model performance through reinforcement learning for treatment simulations and fine-tuned dialogue systems using anonymized therapy transcripts</li>
              <li>Conducted multidisciplinary research spanning oncology data (omics, radiomics) and psychological frameworks (CBT, DBT), publishing findings on AI limitations and clinical applications</li>
              <li>Designed full-stack pipelines from data acquisition (web scraping, EHR integration) to deployment (cloud APIs, telephony systems) for both research projects</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Howard High School</h3>
            <p className="text-primary mb-2">Cumulative GPA: 4.67 • 2022 - 2026</p>
            <p className="text-secondary">
              Transcript and coursework are available upon request.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 