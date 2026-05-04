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
'Information Technology',
'Education'] as
const;

export const mockTheses: Thesis[] = [
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