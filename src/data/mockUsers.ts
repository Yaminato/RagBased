export interface AttendanceRecord {
  date: string;
  timeIn: string;
  timeOut?: string;
  purpose: string;
}

export interface AppUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'librarian' | 'admin';
  studentId?: string;
  department?: string;
  avatar?: string;
  attendance?: AttendanceRecord[];
  lastActive?: string;
  status?: 'active' | 'inactive';
}

export const mockUsers: AppUser[] = [
{
  id: 'student-001',
  name: 'Lourdy Jay Suing',
  email: 'student1@psu.edu.ph',
  password: 'student123',
  role: 'student',
  studentId: '2024-00112',
  department: 'Information Technology',
  status: 'active',
  lastActive: '2026-04-15T09:30:00',
  attendance: [
  { date: '2026-04-15', timeIn: '09:15', purpose: 'Thesis Research' },
  {
    date: '2026-04-14',
    timeIn: '10:00',
    timeOut: '12:30',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-12',
    timeIn: '08:45',
    timeOut: '11:15',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-11',
    timeIn: '13:00',
    timeOut: '15:45',
    purpose: 'Group Study'
  },
  {
    date: '2026-04-09',
    timeIn: '09:30',
    timeOut: '11:00',
    purpose: 'Thesis Consultation'
  },
  {
    date: '2026-04-07',
    timeIn: '14:00',
    timeOut: '16:30',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-04',
    timeIn: '10:15',
    timeOut: '12:00',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-02',
    timeIn: '08:30',
    timeOut: '10:45',
    purpose: 'Group Study'
  },
  {
    date: '2026-03-31',
    timeIn: '13:30',
    timeOut: '15:00',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-03-28',
    timeIn: '09:00',
    timeOut: '11:30',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-03-25',
    timeIn: '14:15',
    timeOut: '16:00',
    purpose: 'Thesis Consultation'
  }]

},
{
  id: 'student-002',
  name: 'Shiela Mendoza',
  email: 'student2@psu.edu.ph',
  password: 'student123',
  role: 'student',
  studentId: '2024-00238',
  department: 'Information Technology',
  status: 'active',
  lastActive: '2026-04-15T08:45:00',
  attendance: [
  { date: '2026-04-15', timeIn: '08:30', purpose: 'Group Study' },
  {
    date: '2026-04-13',
    timeIn: '09:00',
    timeOut: '11:45',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-11',
    timeIn: '14:00',
    timeOut: '16:00',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-10',
    timeIn: '10:30',
    timeOut: '12:15',
    purpose: 'Thesis Consultation'
  },
  {
    date: '2026-04-08',
    timeIn: '08:45',
    timeOut: '10:30',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-05',
    timeIn: '13:00',
    timeOut: '15:30',
    purpose: 'Group Study'
  },
  {
    date: '2026-04-03',
    timeIn: '09:15',
    timeOut: '11:00',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-01',
    timeIn: '14:30',
    timeOut: '16:45',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-03-29',
    timeIn: '10:00',
    timeOut: '12:00',
    purpose: 'Thesis Consultation'
  }]

},
{
  id: 'student-003',
  name: 'John Benedict',
  email: 'student3@psu.edu.ph',
  password: 'student123',
  role: 'student',
  studentId: '2024-00415',
  department: 'Education',
  status: 'active',
  lastActive: '2026-04-14T14:20:00',
  attendance: [
  {
    date: '2026-04-14',
    timeIn: '14:00',
    timeOut: '16:30',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-12',
    timeIn: '09:30',
    timeOut: '11:45',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-10',
    timeIn: '13:15',
    timeOut: '15:00',
    purpose: 'Group Study'
  },
  {
    date: '2026-04-08',
    timeIn: '10:00',
    timeOut: '12:30',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-05',
    timeIn: '08:30',
    timeOut: '10:15',
    purpose: 'Thesis Consultation'
  },
  {
    date: '2026-04-03',
    timeIn: '14:45',
    timeOut: '16:30',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-01',
    timeIn: '09:00',
    timeOut: '11:00',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-03-30',
    timeIn: '13:00',
    timeOut: '14:45',
    purpose: 'Group Study'
  }]

},
{
  id: 'student-004',
  name: 'Denise Cunanan',
  email: 'student4@psu.edu.ph',
  password: 'student123',
  role: 'student',
  studentId: '2024-00587',
  department: 'Education',
  status: 'inactive',
  lastActive: '2026-04-10T11:00:00',
  attendance: [
  {
    date: '2026-04-10',
    timeIn: '10:30',
    timeOut: '12:00',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-04-07',
    timeIn: '09:00',
    timeOut: '11:15',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-04-04',
    timeIn: '13:30',
    timeOut: '15:00',
    purpose: 'Thesis Consultation'
  },
  {
    date: '2026-04-01',
    timeIn: '08:45',
    timeOut: '10:30',
    purpose: 'Group Study'
  },
  {
    date: '2026-03-28',
    timeIn: '14:00',
    timeOut: '16:00',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-03-26',
    timeIn: '10:15',
    timeOut: '12:00',
    purpose: 'Reference Reading'
  },
  {
    date: '2026-03-24',
    timeIn: '09:30',
    timeOut: '11:45',
    purpose: 'Thesis Research'
  },
  {
    date: '2026-03-21',
    timeIn: '13:00',
    timeOut: '14:30',
    purpose: 'Group Study'
  },
  {
    date: '2026-03-19',
    timeIn: '08:30',
    timeOut: '10:00',
    purpose: 'Thesis Consultation'
  },
  {
    date: '2026-03-17',
    timeIn: '14:15',
    timeOut: '16:00',
    purpose: 'Reference Reading'
  }]

},
{
  id: 'librarian-001',
  name: 'Krizza Anne Bautista',
  email: 'librarian@psu.edu.ph',
  password: 'librarian123',
  role: 'librarian',
  status: 'active',
  lastActive: '2026-04-15T07:55:00'
},
{
  id: 'admin-001',
  name: 'Dr. Leyrie Mallo',
  email: 'admin@psu.edu.ph',
  password: 'admin123',
  role: 'admin',
  status: 'active',
  lastActive: '2026-04-15T08:00:00'
}];


export const systemLogs = [
{
  timestamp: '2026-04-15 09:30',
  event: 'Student Lourdy Jay Suing logged in',
  type: 'login' as const
},
{
  timestamp: '2026-04-15 09:15',
  event: 'Search query: "crop disease detection AI"',
  type: 'search' as const
},
{
  timestamp: '2026-04-15 08:45',
  event: 'Student Shiela Mendoza logged in',
  type: 'login' as const
},
{
  timestamp: '2026-04-15 08:30',
  event: 'Search query: "blended learning education"',
  type: 'search' as const
},
{
  timestamp: '2026-04-15 08:00',
  event: 'Admin Dr. Leyrie Mallo logged in',
  type: 'login' as const
},
{
  timestamp: '2026-04-15 07:55',
  event: 'Librarian Krizza Anne Bautista logged in',
  type: 'login' as const
},
{
  timestamp: '2026-04-14 16:30',
  event: 'Student Lourdy Jay Suing checked out',
  type: 'attendance' as const
},
{
  timestamp: '2026-04-14 15:00',
  event: 'New thesis uploaded: "IoT Smart Classroom"',
  type: 'system' as const
},
{
  timestamp: '2026-04-14 14:00',
  event: 'Student John Benedict logged in',
  type: 'login' as const
},
{
  timestamp: '2026-04-14 12:30',
  event: 'Student Lourdy Jay Suing checked out',
  type: 'attendance' as const
}];


export const searchTopics = [
{ topic: 'Machine Learning', count: 45 },
{ topic: 'Thesis Management', count: 38 },
{ topic: 'Crop Disease', count: 32 },
{ topic: 'Blended Learning', count: 28 },
{ topic: 'IoT Systems', count: 25 },
{ topic: 'Blockchain', count: 22 },
{ topic: 'Water Quality', count: 18 },
{ topic: 'Gamification', count: 15 }];


export const departmentUsage = [
  { department: 'Information Technology', visits: 272, theses: 154 },
  { department: 'Education', visits: 198, theses: 124 }];