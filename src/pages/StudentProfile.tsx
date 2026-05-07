import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeftIcon,
  MailIcon,
  BellIcon,
  UserIcon,
  ShieldIcon,
  BookOpenIcon,
  CalendarIcon,
  FileTextIcon,
  CheckCircleIcon,
  FolderIcon,
} from 'lucide-react'
import { PageTransition } from '../components/PageTransition'
import { useAuth } from '../data/authContext'
interface NotificationPref {
  id: string
  label: string
  description: string
  icon: React.ElementType
  enabled: boolean
}
export function StudentProfilePage() {
  const { user } = useAuth()
  const [notifications, setNotifications] = useState<NotificationPref[]>([
    {
      id: 'thesis_status',
      label: 'Thesis Submission Updates',
      description: 'Get notified when your thesis request status changes',
      icon: FileTextIcon,
      enabled: true,
    },
    {
      id: 'attendance_reminder',
      label: 'Library Attendance Reminders',
      description: 'Daily reminders to log your library visits',
      icon: CalendarIcon,
      enabled: true,
    },
    {
      id: 'new_thesis',
      label: 'New Theses in Your Department',
      description: 'Alerts when new research is uploaded in your field',
      icon: BookOpenIcon,
      enabled: false,
    },
    {
      id: 'request_approval',
      label: 'Request Approvals & Rejections',
      description: 'Updates on your pending requests and approvals',
      icon: CheckCircleIcon,
      enabled: true,
    },
    {
      id: 'monthly_report',
      label: 'Monthly Progress Reports',
      description: 'A summary of your library activity each month',
      icon: FolderIcon,
      enabled: false,
    },
  ])
  const [emailSaved, setEmailSaved] = useState(false)
  const [notifEmail, setNotifEmail] = useState(user?.email || '')
  if (!user) return null
  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              enabled: !n.enabled,
            }
          : n,
      ),
    )
  }
  const handleSaveEmail = () => {
    setEmailSaved(true)
    setTimeout(() => setEmailSaved(false), 2500)
  }
  const enabledCount = notifications.filter((n) => n.enabled).length
  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/dashboard/student"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gray-500 hover:text-psu-maroon transition-colors mb-4"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold font-sans flex-shrink-0">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-bold text-psu-charcoal">
                  {user.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-1.5">
                  <span className="text-sm text-gray-500 font-sans">
                    {user.studentId}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-sans font-medium">
                    Student
                  </span>
                  {user.department && (
                    <span className="text-sm text-gray-400 font-sans">
                      {user.department}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Account Information */}
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
            }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center">
                <UserIcon className="w-4 h-4 text-psu-maroon" />
              </div>
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Account Information
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Full Name
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal">
                    {user.name}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Student ID
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal">
                    {user.studentId || '—'}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Email Address
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Department
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal">
                    {user.department || '—'}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Role
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal capitalize">
                    {user.role}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-sans uppercase tracking-wider">
                    Total Library Visits
                  </label>
                  <p className="mt-1 text-sm font-sans font-medium text-psu-charcoal">
                    {user.attendance?.length || 0}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Notification Preferences */}
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
              delay: 0.1,
            }}
            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            id="notifications"
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <BellIcon className="w-4 h-4 text-psu-gold" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                    Email Notifications
                  </h2>
                  <p className="text-xs text-gray-400 font-sans">
                    {enabledCount} of {notifications.length} enabled
                  </p>
                </div>
              </div>
              <MailIcon className="w-5 h-5 text-gray-300" />
            </div>

            <div className="p-6">
              {/* Notification Email */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <label className="text-xs text-gray-400 font-sans uppercase tracking-wider block mb-2">
                  Send notifications to
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={notifEmail}
                      onChange={(e) => setNotifEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm font-sans text-psu-charcoal focus:outline-none focus:ring-2 focus:ring-psu-gold/50 focus:border-psu-gold transition-all"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                  <button
                    onClick={handleSaveEmail}
                    className="px-5 py-2.5 bg-psu-maroon hover:bg-psu-maroon-dark text-white text-sm font-sans font-semibold rounded-lg transition-colors flex items-center gap-2 flex-shrink-0"
                  >
                    {emailSaved ? (
                      <>
                        <CheckCircleIcon className="w-4 h-4" />
                        Saved
                      </>
                    ) : (
                      'Save'
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-400 font-sans mt-2">
                  Notifications will be sent to this Gmail address
                </p>
              </div>

              {/* Notification Toggles */}
              <div className="space-y-1">
                {notifications.map((notif, i) => (
                  <motion.div
                    key={notif.id}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + i * 0.05,
                    }}
                    className="flex items-center justify-between py-3.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${notif.enabled ? 'bg-psu-maroon/8' : 'bg-gray-100'}`}
                      >
                        <notif.icon
                          className={`w-4 h-4 ${notif.enabled ? 'text-psu-maroon' : 'text-gray-400'}`}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-sans font-medium ${notif.enabled ? 'text-psu-charcoal' : 'text-gray-500'}`}
                        >
                          {notif.label}
                        </p>
                        <p className="text-xs text-gray-400 font-sans">
                          {notif.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleNotification(notif.id)}
                      className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${notif.enabled ? 'bg-psu-maroon' : 'bg-gray-200'}`}
                      role="switch"
                      aria-checked={notif.enabled}
                      aria-label={`Toggle ${notif.label}`}
                    >
                      <motion.div
                        className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm"
                        animate={{
                          left: notif.enabled ? 22 : 2,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Info */}
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
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                <ShieldIcon className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                Security
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-sans font-medium text-psu-charcoal">
                    Password
                  </p>
                  <p className="text-xs text-gray-400 font-sans">
                    Last changed: Never
                  </p>
                </div>
                <button className="px-4 py-2 border border-gray-200 text-sm font-sans font-medium text-psu-charcoal rounded-lg hover:bg-gray-50 transition-colors">
                  Change Password
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-gray-100">
                <div>
                  <p className="text-sm font-sans font-medium text-psu-charcoal">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-gray-400 font-sans">
                    Add an extra layer of security
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full font-sans font-medium">
                  Not enabled
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  )
}
