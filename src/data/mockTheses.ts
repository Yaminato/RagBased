export interface Thesis {
  id: string;
  title: string;
  authors: string[];
  department: string;
  year: number;
  adviser: string;
  abstract: string;
  keywords: string[];
  relevanceScore: number;
}

export const departments = [
'Computer Science',
'Information Technology',
'Education',
'Business Administration',
'Agriculture'] as
const;

export const mockTheses: Thesis[] = [
{
  id: 'thesis-001',
  title:
  'Development of an AI-Powered Crop Disease Detection System Using Convolutional Neural Networks',
  authors: ['Maria Santos', 'Juan Dela Cruz'],
  department: 'Computer Science',
  year: 2024,
  adviser: 'Dr. Roberto Manalo',
  abstract:
  'This study presents the development of an AI-powered crop disease detection system utilizing Convolutional Neural Networks (CNNs) to identify and classify common diseases affecting rice and vegetable crops in the province of Pampanga. The system was trained on a dataset of over 15,000 labeled images collected from local farms in Lubao and surrounding municipalities.\n\nThe proposed model achieved an accuracy rate of 94.7% in identifying eight distinct crop diseases, outperforming traditional image processing methods by a significant margin. The system was deployed as a mobile application, enabling farmers to capture images of affected crops and receive instant diagnostic results along with recommended treatment protocols.\n\nField testing conducted across 12 farms demonstrated that early detection through the system reduced crop losses by an estimated 35%, contributing to improved agricultural productivity in the region. The study recommends further expansion of the training dataset and integration with local agricultural extension services.',
  keywords: [
  'artificial intelligence',
  'crop disease detection',
  'convolutional neural networks',
  'agriculture technology',
  'mobile application'],

  relevanceScore: 97
},
{
  id: 'thesis-002',
  title:
  'Impact of Blended Learning on Academic Performance of Senior High School Students in Lubao, Pampanga',
  authors: ['Angela Reyes', 'Patricia Gomez', 'Mark Villanueva'],
  department: 'Education',
  year: 2024,
  adviser: 'Dr. Lourdes Pangilinan',
  abstract:
  'This research investigates the impact of blended learning approaches on the academic performance of Senior High School students in selected schools within Lubao, Pampanga. The study employed a quasi-experimental design involving 240 students from three public high schools, comparing traditional face-to-face instruction with a blended learning model that incorporated online modules and virtual collaboration tools.\n\nResults revealed that students exposed to blended learning demonstrated statistically significant improvements in their academic performance across core subjects, with a mean difference of 8.3 points compared to the control group. Additionally, student engagement metrics showed a 42% increase in participation rates among the blended learning cohort.\n\nThe findings suggest that blended learning, when properly implemented with adequate technological infrastructure and teacher training, can serve as an effective pedagogical strategy for improving educational outcomes in semi-urban communities.',
  keywords: [
  'blended learning',
  'academic performance',
  'senior high school',
  'educational technology',
  'pedagogy'],

  relevanceScore: 89
},
{
  id: 'thesis-003',
  title:
  'Feasibility Study of a Solar-Powered Irrigation System for Small-Scale Farmers in Pampanga',
  authors: ['Ricardo Aquino', 'Elena Bautista'],
  department: 'Agriculture',
  year: 2023,
  adviser: 'Prof. Fernando Lacson',
  abstract:
  "This feasibility study evaluates the viability of implementing solar-powered irrigation systems for small-scale rice farmers in the municipality of Lubao, Pampanga. The research assessed technical, economic, and environmental factors through a mixed-methods approach involving surveys of 150 farmers, cost-benefit analysis, and pilot installation at three demonstration sites.\n\nThe economic analysis revealed that the initial investment of approximately PHP 85,000 per hectare could be recovered within 3.2 years through reduced fuel costs and improved crop yields. The pilot installations demonstrated a 28% reduction in water consumption compared to conventional flood irrigation methods, while maintaining comparable yield levels.\n\nThe study concludes that solar-powered irrigation represents a sustainable and economically viable alternative for small-scale farmers, particularly given the increasing costs of fossil fuels and the region's abundant solar resources averaging 5.2 peak sun hours daily.",
  keywords: [
  'solar energy',
  'irrigation system',
  'sustainable agriculture',
  'feasibility study',
  'renewable energy'],

  relevanceScore: 82
},
{
  id: 'thesis-004',
  title: 'Web-Based Inventory Management System for Local SMEs in Lubao',
  authors: ['Jerome Pineda', 'Kristine Manansala'],
  department: 'Information Technology',
  year: 2024,
  adviser: 'Engr. Carmela Dizon',
  abstract:
  'This study addresses the inventory management challenges faced by small and medium enterprises (SMEs) in Lubao, Pampanga through the development of a web-based inventory management system. The system was designed using agile methodology and implemented with modern web technologies including React, Node.js, and MongoDB.\n\nThe system features real-time stock tracking, automated reorder point notifications, sales analytics dashboards, and multi-user access control. User acceptance testing conducted with 15 local SMEs yielded an overall satisfaction rating of 4.6 out of 5.0, with particular praise for the intuitive interface and barcode scanning integration.\n\nImplementation results showed that participating businesses experienced a 45% reduction in stock discrepancies and a 30% improvement in order fulfillment times within the first three months of adoption. The study recommends cloud deployment options to reduce infrastructure costs for micro-enterprises.',
  keywords: [
  'inventory management',
  'web application',
  'SME',
  'agile development',
  'e-commerce'],

  relevanceScore: 75
},
{
  id: 'thesis-005',
  title:
  'Financial Literacy and Entrepreneurial Intentions Among Business Administration Students',
  authors: ['Samantha Ocampo', 'David Lingad', 'Rachel Torres'],
  department: 'Business Administration',
  year: 2023,
  adviser: 'Dr. Amelia Cunanan',
  abstract:
  'This study examines the relationship between financial literacy levels and entrepreneurial intentions among Business Administration students at Pampanga State University - Lubao Campus. A descriptive-correlational research design was employed, surveying 320 students across all year levels using standardized financial literacy assessments and entrepreneurial intention scales.\n\nFindings indicate a moderate positive correlation (r = 0.58, p < 0.01) between financial literacy scores and entrepreneurial intentions. Students who participated in financial literacy workshops and business plan competitions demonstrated significantly higher entrepreneurial self-efficacy scores. Gender analysis revealed no significant differences in financial literacy levels, though male students showed marginally higher risk-taking propensity.\n\nThe study recommends the integration of practical financial management modules into the Business Administration curriculum and the establishment of a student business incubator to nurture entrepreneurial talent within the campus community.',
  keywords: [
  'financial literacy',
  'entrepreneurship',
  'business education',
  'student development',
  'self-efficacy'],

  relevanceScore: 68
},
{
  id: 'thesis-006',
  title:
  'Sentiment Analysis of Student Feedback Using Natural Language Processing for Course Evaluation',
  authors: ['Carlo Mendoza', 'Alyssa Garcia'],
  department: 'Computer Science',
  year: 2023,
  adviser: 'Dr. Roberto Manalo',
  abstract:
  'This research presents a sentiment analysis system designed to process and analyze student feedback from course evaluations at Pampanga State University. The system employs Natural Language Processing (NLP) techniques, specifically utilizing a fine-tuned BERT model adapted for Filipino-English code-switching text commonly found in student responses.\n\nThe model was trained on a corpus of 8,500 anonymized student evaluation responses collected over three academic years. The system achieved an F1-score of 0.87 for sentiment classification across three categories: positive, negative, and neutral. The analysis revealed that teaching methodology and faculty accessibility were the most frequently discussed topics in student feedback.\n\nThe automated system reduces the manual processing time for course evaluations by approximately 85%, enabling administrators to identify areas for improvement more efficiently. The study contributes to the growing body of research on NLP applications in Philippine educational contexts.',
  keywords: [
  'sentiment analysis',
  'natural language processing',
  'BERT',
  'course evaluation',
  'text mining'],

  relevanceScore: 91
},
{
  id: 'thesis-007',
  title:
  'Assessment of Water Quality in Pampanga River Basin: Implications for Community Health',
  authors: ['Miguel Flores', 'Isabelle Navarro', 'Ryan Guevarra'],
  department: 'Agriculture',
  year: 2024,
  adviser: 'Dr. Teresa Yumang',
  abstract:
  'This study conducts a comprehensive assessment of water quality parameters in selected tributaries of the Pampanga River Basin, with particular focus on waterways adjacent to agricultural and residential areas in Lubao. Water samples were collected from 18 monitoring stations over a 12-month period and analyzed for physicochemical and microbiological parameters.\n\nResults indicate that 7 out of 18 stations exceeded the DENR water quality guidelines for dissolved oxygen, biochemical oxygen demand, and coliform bacteria counts, particularly during the wet season. Agricultural runoff containing pesticide residues was identified as the primary contributor to water quality degradation in upstream stations, while domestic wastewater discharge was the dominant factor in downstream urban areas.\n\nThe study provides baseline data for environmental management planning and recommends the implementation of constructed wetlands and community-based water quality monitoring programs to address the identified contamination issues.',
  keywords: [
  'water quality',
  'environmental assessment',
  'Pampanga River',
  'community health',
  'pollution monitoring'],

  relevanceScore: 73
},
{
  id: 'thesis-008',
  title:
  'Development of a QR Code-Based Attendance Monitoring System with Analytics Dashboard',
  authors: ['Kenneth Layug', 'Bianca Serrano'],
  department: 'Information Technology',
  year: 2023,
  adviser: 'Engr. Carmela Dizon',
  abstract:
  'This project presents the development and implementation of a QR code-based attendance monitoring system designed for use at Pampanga State University - Lubao Campus. The system generates unique, time-sensitive QR codes for each class session, which students scan using a companion mobile application to record their attendance in real-time.\n\nThe system includes an analytics dashboard that provides faculty and administrators with visual representations of attendance patterns, including trend analysis, department-level comparisons, and early warning indicators for students with declining attendance rates. Integration with the existing student information system ensures data consistency and reduces administrative overhead.\n\nPilot testing across 24 class sections involving 720 students demonstrated a 98.5% scan success rate and reduced attendance recording time from an average of 8 minutes to under 30 seconds per session. Faculty feedback highlighted the value of automated attendance reports and the ability to identify at-risk students proactively.',
  keywords: [
  'QR code',
  'attendance monitoring',
  'analytics dashboard',
  'mobile application',
  'student information system'],

  relevanceScore: 79
},
{
  id: 'thesis-009',
  title:
  'Effectiveness of Gamification in Teaching Mathematics to Grade 10 Students',
  authors: ['Christine Lapid', 'Andrew Mercado'],
  department: 'Education',
  year: 2024,
  adviser: 'Dr. Lourdes Pangilinan',
  abstract:
  'This experimental study investigates the effectiveness of gamification strategies in improving mathematics achievement and motivation among Grade 10 students in public secondary schools in Lubao, Pampanga. The research utilized a pretest-posttest control group design with 180 participants divided equally between experimental and control groups.\n\nThe gamification intervention incorporated elements such as point systems, achievement badges, leaderboards, and narrative-driven problem sets into the standard mathematics curriculum over a 10-week period. Post-intervention results showed that the experimental group achieved a mean score improvement of 15.7 points compared to 7.2 points for the control group, with the difference being statistically significant (p < 0.001).\n\nNotably, the gamification approach was particularly effective for students who initially demonstrated low mathematical self-efficacy, with this subgroup showing the largest gains. The study provides practical guidelines for teachers seeking to implement gamification in their mathematics instruction.',
  keywords: [
  'gamification',
  'mathematics education',
  'student motivation',
  'educational technology',
  'experimental research'],

  relevanceScore: 85
},
{
  id: 'thesis-010',
  title: 'Blockchain-Based Document Verification System for Academic Records',
  authors: ['Francis Yap', 'Denise Cunanan', 'Leo Pangilinan'],
  department: 'Computer Science',
  year: 2024,
  adviser: 'Dr. Roberto Manalo',
  abstract:
  'This study proposes and implements a blockchain-based document verification system for securing and authenticating academic records at Pampanga State University. The system utilizes Ethereum smart contracts to create immutable records of academic credentials, enabling instant verification by employers and other educational institutions without requiring direct contact with the university registrar.\n\nThe prototype system was developed using Solidity for smart contract development, React for the front-end interface, and IPFS for decentralized document storage. Performance testing demonstrated that document verification could be completed in under 3 seconds, compared to the traditional process that typically requires 3-5 business days.\n\nSecurity analysis confirmed that the system is resistant to common attack vectors including document forgery, unauthorized modifications, and replay attacks. The estimated operational cost of PHP 15 per verification transaction makes the system economically viable for institutional deployment. The study contributes to the emerging field of blockchain applications in Philippine higher education.',
  keywords: [
  'blockchain',
  'document verification',
  'academic records',
  'smart contracts',
  'Ethereum',
  'decentralized systems'],

  relevanceScore: 94
},
{
  id: 'thesis-011',
  title:
  'Market Analysis and Business Model Development for Organic Farming Cooperatives in Pampanga',
  authors: ['Grace Tolentino', 'Martin Guinto'],
  department: 'Business Administration',
  year: 2024,
  adviser: 'Dr. Amelia Cunanan',
  abstract:
  "This study conducts a comprehensive market analysis for organic farming products in Pampanga province and develops a sustainable business model for agricultural cooperatives transitioning to organic farming practices. The research employed a mixed-methods approach combining consumer surveys (n=500), farmer interviews (n=45), and financial modeling.\n\nMarket analysis revealed a growing demand for organic produce among middle-income consumers in Central Luzon, with 67% of respondents willing to pay a 20-30% premium for certified organic products. The proposed cooperative business model incorporates shared certification costs, collective marketing strategies, and direct-to-consumer distribution channels through farmers' markets and online platforms.\n\nFinancial projections indicate that cooperatives adopting the proposed model could achieve profitability within 18 months, with an estimated ROI of 45% by the third year of operation. The study provides actionable recommendations for cooperative formation, organic certification processes, and market entry strategies.",
  keywords: [
  'organic farming',
  'market analysis',
  'business model',
  'cooperative',
  'sustainable agriculture'],

  relevanceScore: 71
},
{
  id: 'thesis-012',
  title:
  'IoT-Based Smart Classroom Environment Monitoring and Control System',
  authors: ['Ralph Escoto', 'Janelle Magat'],
  department: 'Information Technology',
  year: 2024,
  adviser: 'Engr. Carmela Dizon',
  abstract:
  'This project designs and implements an Internet of Things (IoT) based smart classroom system for monitoring and controlling environmental conditions at PSU Lubao. The system integrates temperature, humidity, light intensity, and air quality sensors with automated control mechanisms for air conditioning units, lighting systems, and ventilation fans.\n\nThe hardware prototype utilizes ESP32 microcontrollers connected to a central server via MQTT protocol, with a web-based dashboard providing real-time monitoring and manual override capabilities. Machine learning algorithms were implemented to predict optimal environmental settings based on occupancy patterns and external weather conditions.\n\nDeployment in two pilot classrooms over a semester demonstrated a 22% reduction in energy consumption while maintaining comfort levels within ASHRAE recommended ranges. Student surveys indicated a 78% satisfaction rate with the automated environmental controls, and faculty reported fewer complaints about classroom temperature and lighting conditions.',
  keywords: [
  'Internet of Things',
  'smart classroom',
  'environmental monitoring',
  'energy efficiency',
  'automation'],

  relevanceScore: 86
}];


export function searchTheses(
query: string,
filters?: {
  department?: string;
  yearFrom?: number;
  yearTo?: number;
  sortBy?: string;
})
: Thesis[] {
  let results = [...mockTheses];

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (t) =>
      t.title.toLowerCase().includes(q) ||
      t.abstract.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q)) ||
      t.authors.some((a) => a.toLowerCase().includes(q)) ||
      t.department.toLowerCase().includes(q)
    );
  }

  if (filters?.department) {
    results = results.filter((t) => t.department === filters.department);
  }

  if (filters?.yearFrom) {
    results = results.filter((t) => t.year >= filters.yearFrom!);
  }

  if (filters?.yearTo) {
    results = results.filter((t) => t.year <= filters.yearTo!);
  }

  if (filters?.sortBy === 'date') {
    results.sort((a, b) => b.year - a.year);
  } else if (filters?.sortBy === 'title') {
    results.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  return results;
}

export function getThesisById(id: string): Thesis | undefined {
  return mockTheses.find((t) => t.id === id);
}

export function getRelatedTheses(thesis: Thesis, count: number = 3): Thesis[] {
  return mockTheses.
  filter((t) => t.id !== thesis.id && t.department === thesis.department).
  sort((a, b) => b.relevanceScore - a.relevanceScore).
  slice(0, count);
}