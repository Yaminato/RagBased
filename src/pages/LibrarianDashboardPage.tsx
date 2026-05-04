import React from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  ActivityIcon,
  BookOpenIcon,
  UploadIcon,
  FileTextIcon,
  ClockIcon,
  CircleDotIcon,
  CheckCircleIcon,
  PlusIcon,
  DownloadIcon,
  SearchIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { useAuth } from '../data/authContext';
import { mockUsers, departmentUsage, systemLogs } from '../data/mockUsers';
import { mockTheses } from '../data/mockTheses';
export function LibrarianDashboardPage() {
  const { user } = useAuth();
  if (!user) return null;
  const students = mockUsers.filter((u) => u.role === 'student');
  const today = new Date().toISOString().split('T')[0];
  const todayStudents = students.filter((s) =>
  s.attendance?.some((r) => r.date === today)
  );
  const activeStudents = students.filter((s) =>
  s.attendance?.some((r) => r.date === today && !r.timeOut)
  );
  const overviewStats = [
  {
    label: 'Students Today',
    value: todayStudents.length,
    icon: UsersIcon,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    label: 'Active Sessions',
    value: activeStudents.length,
    icon: ActivityIcon,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    label: 'Theses Accessed',
    value: 24,
    icon: BookOpenIcon,
    color: 'text-psu-maroon bg-psu-maroon/8'
  },
  {
    label: 'New Uploads',
    value: 3,
    icon: UploadIcon,
    color: 'text-psu-gold bg-amber-50'
  }];

  const maxVisits = Math.max(...departmentUsage.map((d) => d.visits));
  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Welcome Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xl font-bold font-sans">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-psu-charcoal">
                  Welcome, {user.name}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-sans font-medium">
                    Librarian
                  </span>
                  <span className="text-sm text-gray-400 font-sans">
                    Library Management Dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {overviewStats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.08
              }}
              className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
              
                <div
                className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold font-sans text-psu-charcoal">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-sans mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Today's Attendance Log */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: 0.2
              }}
              className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                  Today's Attendance Log
                </h2>
                <span className="text-xs font-sans font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {activeStudents.length} active
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="text-left px-6 py-3">Student</th>
                      <th className="text-left px-6 py-3">Student ID</th>
                      <th className="text-left px-6 py-3">Time In</th>
                      <th className="text-left px-6 py-3">Purpose</th>
                      <th className="text-left px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, i) => {
                      const todayRec = student.attendance?.find(
                        (r) => r.date === today
                      );
                      if (!todayRec) return null;
                      const isActive = !todayRec.timeOut;
                      return (
                        <tr
                          key={student.id}
                          className={`text-sm font-sans ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} border-t border-gray-50`}>
                          
                          <td className="px-6 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                                {student.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-psu-charcoal">
                                  {student.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {student.department}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-3 text-gray-600">
                            {student.studentId}
                          </td>
                          <td className="px-6 py-3 text-gray-600">
                            {todayRec.timeIn}
                          </td>
                          <td className="px-6 py-3 text-gray-500">
                            {todayRec.purpose}
                          </td>
                          <td className="px-6 py-3">
                            {isActive ?
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                                <CircleDotIcon className="w-3 h-3" />
                                In Library
                              </span> :

                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                                <CheckCircleIcon className="w-3 h-3" />
                                Left at {todayRec.timeOut}
                              </span>
                            }
                          </td>
                        </tr>);

                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Quick Actions + Activity */}
            <div className="space-y-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-psu-maroon hover:bg-psu-maroon-dark text-white transition-colors text-sm font-sans font-medium">
                    <PlusIcon className="w-4 h-4" />
                    Add New Thesis
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 text-psu-charcoal transition-colors text-sm font-sans font-medium">
                    <DownloadIcon className="w-4 h-4" />
                    Generate Report
                  </button>
                </div>
              </motion.div>

              {/* Student Activity Feed */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {systemLogs.slice(0, 6).map((log, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${log.type === 'login' ? 'bg-blue-400' : log.type === 'search' ? 'bg-psu-gold' : log.type === 'attendance' ? 'bg-emerald-400' : 'bg-gray-400'}`} />
                    
                      <div>
                        <p className="text-xs text-gray-600 font-sans leading-relaxed">
                          {log.event}
                        </p>
                        <p className="text-[10px] text-gray-400 font-sans mt-0.5">
                          {log.timestamp}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Department Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4,
              delay: 0.5
            }}
            className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Thesis Collection by Department
              </h2>
              <span className="text-sm text-gray-400 font-sans">
                {mockTheses.length} total in system
              </span>
            </div>
            <div className="space-y-4">
              {departmentUsage.map((dept, i) =>
              <div key={dept.department} className="flex items-center gap-4">
                  <div className="w-40 sm:w-52 text-sm font-sans text-psu-charcoal font-medium truncate flex-shrink-0">
                    {dept.department}
                  </div>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <motion.div
                    initial={{
                      width: 0
                    }}
                    animate={{
                      width: `${dept.visits / maxVisits * 100}%`
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.1
                    }}
                    className="h-full bg-psu-maroon/80 rounded-lg flex items-center justify-end pr-3">
                    
                      <span className="text-xs font-sans font-bold text-white">
                        {dept.visits}
                      </span>
                    </motion.div>
                  </div>
                  <div className="text-xs text-gray-400 font-sans w-20 text-right flex-shrink-0">
                    {dept.theses} theses
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>);

}