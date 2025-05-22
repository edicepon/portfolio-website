import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: 'Conversational AI Therapist and Biographer',
        description: 'Developed a voice-enabled AI therapist with real-time speech processing and dynamic response generation, deployed via telephony APIs for accessible mental health support.',
        technologies: ['Python', 'Whisper', 'SpeechRecognition', 'GPT-3.5', 'RAG', 'Eleven Labs', 'Twilio'],
        image: '/projects/therapist.png',
    },
    {
        title: 'Task Management Focus App',
        description: 'A collaborative task management application with real-time updates, team features, and a unique social media limiting feature that allows users to set daily time limits for platforms like TikTok, Instagram, Snapchat, and X (Twitter), automatically blocking access once the limit is reached to promote focused work and productivity.',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
        image: '/projects/task-manager.webp',
    },
    {
        title: 'AI-Powered Cancer Prognosis System',
        description: 'Led development of advanced AI systems for cancer prognosis and treatment prediction, achieving 96% accuracy in subtype classification using ML techniques and clinical research insights.',
        technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Neo4j', 'Vision Transformer'],
        image: '/projects/cancerprognosis.png',
    },
    {
        title: 'Regional COVID-19 Tracker App',
        description: 'Developed a mobile application for real-time COVID-19 tracking that aggregates and visualizes local infection rates, vaccination data, and healthcare capacity metrics. Features include interactive maps, trend analysis, and push notifications for significant changes in regional statistics.',
        technologies: ['React Native', 'Firebase', 'MongoDB', 'Google Maps SDK'],
        image: '/projects/newercovid-app.webp',
    },
    {
        title: 'Stock Market Predictor',
        description: 'Developed an AI-powered stock market prediction system that analyzes historical data, market sentiment, and technical indicators to forecast stock price movements. Features include real-time data processing, automated trading signals, and customizable prediction models for different market conditions.',
        technologies: ['Python', 'TensorFlow', 'Pandas', 'Yahoo Finance API', 'Scikit-learn', 'Streamlit'],
        image: '/projects/stock-predictor.png',
    }
];