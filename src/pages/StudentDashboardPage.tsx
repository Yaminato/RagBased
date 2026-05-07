import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ClockIcon,
  CalendarIcon,
  BookOpenIcon,
  SearchIcon,
  LogOutIcon,
  CheckCircleIcon,
  CircleDotIcon,
  UserIcon,
  BarChart3Icon,
  ArrowRightIcon,
  BellIcon,
  FileTextIcon,
  DownloadIcon,
  FolderOpenIcon,
} from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { ThesisCard } from '../components/ThesisCard'
import { useAuth } from '../data/authContext'
import { mockTheses } from '../data/mockTheses'
export function StudentDashboardPage() {
  const { user, checkOutStudent } = useAuth()
  if (!user) return null
  const today = new Date().toISOString().split('T')[0]
  const todayRecord = user.attendance?.find((r) => r.date === today)
  const isCheckedIn = todayRecord && !todayRecord.timeOut
  const monthRecords =
    user.attendance?.filter((r) => r.date.startsWith(today.slice(0, 7))) || []
  const recentTheses = mockTheses.slice(0, 3)
  const totalVisits = user.attendance?.length || 0
  const totalHours =
    user.attendance?.reduce((acc, r) => {
      if (r.timeIn && r.timeOut) {
        const [inH, inM] = r.timeIn.split(':').map(Number)
        const [outH, outM] = r.timeOut.split(':').map(Number)
        return acc + (outH - inH) + (outM - inM) / 60
      }
      return acc
    }, 0) || 0
  const statCards = [
    {
      label: 'Total Visits',
      value: totalVisits,
      icon: CalendarIcon,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: 'Theses Accessed',
      value: 12,
      icon: BookOpenIcon,
      color: 'text-psu-maroon bg-psu-maroon/8',
    },
    {
      label: 'Hours Spent',
      value: `${totalHours.toFixed(1)}h`,
      icon: ClockIcon,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: 'This Month',
      value: monthRecords.length,
      icon: BarChart3Icon,
      color: 'text-psu-gold bg-amber-50',
    },
  ]
  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Welcome Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold font-sans">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-display font-bold text-psu-charcoal">
                    Welcome, {user.name.split(' ')[0]}
                  </h1>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-500 font-sans">
                      {user.studentId}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-sans font-medium">
                      Student
                    </span>
                    {user.department && (
                      <span className="text-sm text-gray-400 font-sans hidden sm:inline">
                        {user.department}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Today's Status */}
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${isCheckedIn ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}
              >
                {isCheckedIn ? (
                  <>
                    <div className="relative">
                      <CircleDotIcon className="w-5 h-5 text-emerald-500" />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-sans font-semibold text-emerald-700">
                        In Library
                      </p>
                      <p className="text-xs text-emerald-600/70 font-sans">
                        Since {todayRecord?.timeIn}
                      </p>
                    </div>
                    <button
                      onClick={checkOutStudent}
                      className="ml-3 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <LogOutIcon className="w-3.5 h-3.5" />
                      Check Out
                    </button>
                  </>
                ) : (
                  <>
                    <CheckCircleIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-sans font-medium text-gray-600">
                        {todayRecord ? 'Checked Out' : 'Not Checked In Today'}
                      </p>
                      {todayRecord?.timeOut && (
                        <p className="text-xs text-gray-400 font-sans">
                          Left at {todayRecord.timeOut}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.08,
                }}
                className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}
                >
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold font-sans text-psu-charcoal">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-sans mt-0.5">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Attendance History */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                    Attendance History
                  </h2>
                  <span className="text-xs text-gray-400 font-sans">
                    {user.attendance?.length || 0} records
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                        <th className="text-left px-6 py-3">Date</th>
                        <th className="text-left px-6 py-3">Time In</th>
                        <th className="text-left px-6 py-3">Time Out</th>
                        <th className="text-left px-6 py-3">Purpose</th>
                        <th className="text-left px-6 py-3">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(user.attendance || []).slice(0, 10).map((record, i) => {
                        let duration = '—'
                        if (record.timeIn && record.timeOut) {
                          const [inH, inM] = record.timeIn
                            .split(':')
                            .map(Number)
                          const [outH, outM] = record.timeOut
                            .split(':')
                            .map(Number)
                          const mins = outH * 60 + outM - (inH * 60 + inM)
                          const h = Math.floor(mins / 60)
                          const m = mins % 60
                          duration = h > 0 ? `${h}h ${m}m` : `${m}m`
                        }
                        return (
                          <tr
                            key={i}
                            className={`text-sm font-sans ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} border-t border-gray-50`}
                          >
                            <td className="px-6 py-3 text-psu-charcoal font-medium">
                              {record.date}
                            </td>
                            <td className="px-6 py-3 text-gray-600">
                              {record.timeIn}
                            </td>
                            <td className="px-6 py-3">
                              {record.timeOut ? (
                                <span className="text-gray-600">
                                  {record.timeOut}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-emerald-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Active
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-3 text-gray-500">
                              {record.purpose}
                            </td>
                            <td className="px-6 py-3 text-gray-500">
                              {record.timeOut ? duration : 'Ongoing'}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-5">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
              >
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/search"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center">
                      <SearchIcon className="w-4 h-4 text-psu-maroon" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      Search Theses
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </Link>
                  <Link
                    to="/dashboard/student/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      View Profile
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </Link>
                  <Link
                    to="/dashboard/student/profile#notifications"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                      <BellIcon className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      Notification Settings
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </Link>
                  <button
                    onClick={() => alert('Thesis request form coming soon!')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                      <FileTextIcon className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      Submit Thesis Request
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </button>
                  <button
                    onClick={() => alert('Attendance report downloaded!')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                      <DownloadIcon className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      Download Attendance Report
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </button>
                  <Link
                    to="/search"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                      <FolderOpenIcon className="w-4 h-4 text-rose-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      Browse by Department
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <CalendarIcon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-sm font-sans font-medium text-psu-charcoal group-hover:text-psu-maroon transition-colors">
                      About System
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-gray-300 ml-auto group-hover:text-psu-maroon transition-colors" />
                  </Link>
                </div>
              </motion.div>

              {/* Monthly Summary */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
              >
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-3">
                  Monthly Summary
                </h3>
                <div className="text-center py-4">
                  <p className="text-4xl font-bold font-sans text-psu-maroon">
                    {monthRecords.length}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    Library visits this month
                  </p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${Math.min((monthRecords.length / 20) * 100, 100)}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                    }}
                    className="h-full bg-psu-maroon rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400 font-sans mt-2 text-center">
                  Goal: 20 visits/month
                </p>
              </motion.div>
            </div>
          </div>

          {/* Recent Thesis Views */}
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.5,
            }}
            className="mt-8"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Recently Viewed Theses
              </h2>
              <Link
                to="/search"
                className="text-sm font-sans font-medium text-psu-maroon hover:text-psu-maroon-dark transition-colors flex items-center gap-1"
              >
                View all <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {recentTheses.map((thesis, i) => (
                <ThesisCard key={thesis.id} thesis={thesis} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
