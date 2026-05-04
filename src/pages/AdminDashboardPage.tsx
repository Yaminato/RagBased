import React from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  BookOpenIcon,
  ServerIcon,
  SearchIcon,
  SettingsIcon,
  DatabaseIcon,
  DownloadIcon,
  ShieldIcon,
  EditIcon,
  UserXIcon,
  ActivityIcon,
  ClockIcon,
  TrendingUpIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { useAuth } from '../data/authContext';
import {
  mockUsers,
  systemLogs,
  searchTopics,
  departmentUsage } from
'../data/mockUsers';
const roleBadge = {
  student: 'bg-blue-100 text-blue-700',
  librarian: 'bg-emerald-100 text-emerald-700',
  admin: 'bg-psu-maroon/10 text-psu-maroon'
};
const statusDot = {
  active: 'bg-emerald-400',
  inactive: 'bg-gray-300'
};
const weeklySearches = [
{
  day: 'Mon',
  count: 42
},
{
  day: 'Tue',
  count: 58
},
{
  day: 'Wed',
  count: 35
},
{
  day: 'Thu',
  count: 67
},
{
  day: 'Fri',
  count: 51
},
{
  day: 'Sat',
  count: 23
},
{
  day: 'Sun',
  count: 12
}];

export function AdminDashboardPage() {
  const { user } = useAuth();
  if (!user) return null;
  const maxSearch = Math.max(...weeklySearches.map((d) => d.count));
  const maxUsage = Math.max(...departmentUsage.map((d) => d.visits));
  const systemStats = [
  {
    label: 'Total Users',
    value: mockUsers.length,
    icon: UsersIcon,
    color: 'text-blue-600 bg-blue-50'
  },
  {
    label: 'Total Theses',
    value: '1,250',
    icon: BookOpenIcon,
    color: 'text-psu-maroon bg-psu-maroon/8'
  },
  {
    label: 'System Uptime',
    value: '99.8%',
    icon: ServerIcon,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    label: 'Queries Today',
    value: 156,
    icon: SearchIcon,
    color: 'text-psu-gold bg-amber-50'
  }];

  const quickActions = [
  {
    label: 'Manage Users',
    icon: UsersIcon,
    color: 'bg-blue-500'
  },
  {
    label: 'System Settings',
    icon: SettingsIcon,
    color: 'bg-psu-charcoal'
  },
  {
    label: 'Generate Reports',
    icon: DownloadIcon,
    color: 'bg-psu-maroon'
  },
  {
    label: 'Backup Data',
    icon: DatabaseIcon,
    color: 'bg-emerald-600'
  }];

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Welcome Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-psu-maroon flex items-center justify-center text-white text-xl font-bold font-sans">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-psu-charcoal">
                  Welcome, {user.name}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 bg-psu-maroon/10 text-psu-maroon rounded-full font-sans font-medium flex items-center gap-1">
                    <ShieldIcon className="w-3 h-3" />
                    Administrator
                  </span>
                  <span className="text-sm text-gray-400 font-sans">
                    System Administration Panel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* System Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {systemStats.map((stat, i) =>
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

          {/* Quick Actions */}
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
              duration: 0.3,
              delay: 0.2
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            
            {quickActions.map((action) =>
            <button
              key={action.label}
              className="flex items-center gap-3 px-4 py-3.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-psu-gold/30 transition-all text-left">
              
                <div
                className={`w-9 h-9 rounded-lg ${action.color} flex items-center justify-center flex-shrink-0`}>
                
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-sans font-medium text-psu-charcoal">
                  {action.label}
                </span>
              </button>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Management */}
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
              className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-display font-semibold text-psu-charcoal">
                  User Management
                </h2>
                <span className="text-xs text-gray-400 font-sans">
                  {mockUsers.length} users
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs font-sans font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="text-left px-6 py-3">User</th>
                      <th className="text-left px-6 py-3">Role</th>
                      <th className="text-left px-6 py-3">Status</th>
                      <th className="text-left px-6 py-3">Last Active</th>
                      <th className="text-right px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockUsers.map((u, i) =>
                    <tr
                      key={u.id}
                      className={`text-sm font-sans ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} border-t border-gray-50`}>
                      
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${u.role === 'admin' ? 'bg-psu-maroon' : u.role === 'librarian' ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                            
                              {u.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium text-psu-charcoal">
                                {u.name}
                              </p>
                              <p className="text-xs text-gray-400">{u.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${roleBadge[u.role]}`}>
                          
                            {u.role.charAt(0).toUpperCase() + u.role.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          <span className="flex items-center gap-1.5">
                            <span
                            className={`w-2 h-2 rounded-full ${statusDot[u.status || 'inactive']}`} />
                          
                            <span className="text-xs text-gray-500 capitalize">
                              {u.status || 'inactive'}
                            </span>
                          </span>
                        </td>
                        <td className="px-6 py-3 text-xs text-gray-500">
                          {u.lastActive ?
                        new Date(u.lastActive).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          }
                        ) :
                        '—'}
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center justify-end gap-1">
                            <button
                            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-psu-charcoal transition-colors"
                            title="Edit">
                            
                              <EditIcon className="w-3.5 h-3.5" />
                            </button>
                            <button
                            className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                            title="Deactivate">
                            
                              <UserXIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Most Searched Topics */}
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
              
              <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4 flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4 text-psu-gold" />
                Top Search Topics
              </h3>
              <div className="space-y-3">
                {searchTopics.map((topic, i) =>
                <div key={topic.topic} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 font-sans w-4 text-right">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-sans text-psu-charcoal">
                          {topic.topic}
                        </span>
                        <span className="text-xs text-gray-400 font-sans">
                          {topic.count}
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                        initial={{
                          width: 0
                        }}
                        animate={{
                          width: `${topic.count / searchTopics[0].count * 100}%`
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + i * 0.06
                        }}
                        className="h-full bg-psu-maroon/70 rounded-full" />
                      
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Weekly Search Queries */}
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
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              
              <h3 className="text-lg font-display font-semibold text-psu-charcoal mb-5">
                Search Queries This Week
              </h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {weeklySearches.map((day, i) =>
                <div
                  key={day.day}
                  className="flex-1 flex flex-col items-center gap-2">
                  
                    <span className="text-xs font-sans font-medium text-psu-charcoal">
                      {day.count}
                    </span>
                    <motion.div
                    initial={{
                      height: 0
                    }}
                    animate={{
                      height: `${day.count / maxSearch * 100}%`
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + i * 0.06
                    }}
                    className={`w-full rounded-t-lg ${day.day === 'Thu' ? 'bg-psu-maroon' : 'bg-psu-maroon/30'}`}
                    style={{
                      minHeight: 4
                    }} />
                  
                    <span className="text-xs text-gray-400 font-sans">
                      {day.day}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* System Logs */}
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
                delay: 0.6
              }}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-display font-semibold text-psu-charcoal">
                  Recent System Logs
                </h3>
              </div>
              <div className="divide-y divide-gray-50 max-h-[280px] overflow-y-auto">
                {systemLogs.map((log, i) =>
                <div
                  key={i}
                  className="px-6 py-3 flex items-start gap-3 hover:bg-gray-50/50 transition-colors">
                  
                    <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${log.type === 'login' ? 'bg-blue-50 text-blue-500' : log.type === 'search' ? 'bg-amber-50 text-psu-gold' : log.type === 'attendance' ? 'bg-emerald-50 text-emerald-500' : 'bg-gray-50 text-gray-400'}`}>
                    
                      {log.type === 'login' ?
                    <UsersIcon className="w-3 h-3" /> :
                    log.type === 'search' ?
                    <SearchIcon className="w-3 h-3" /> :
                    log.type === 'attendance' ?
                    <ClockIcon className="w-3 h-3" /> :

                    <ActivityIcon className="w-3 h-3" />
                    }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 font-sans">
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

          {/* Department Usage */}
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
              delay: 0.7
            }}
            className="mt-8 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            
            <h3 className="text-lg font-display font-semibold text-psu-charcoal mb-5">
              Department Usage Breakdown
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {departmentUsage.map((dept, i) =>
              <motion.div
                key={dept.department}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + i * 0.06
                }}
                className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                
                  <p className="text-2xl font-bold font-sans text-psu-maroon">
                    {dept.visits}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5 mb-2">
                    visits
                  </p>
                  <p className="text-xs font-sans font-medium text-psu-charcoal leading-tight">
                    {dept.department}
                  </p>
                  <p className="text-[10px] text-gray-400 font-sans mt-1">
                    {dept.theses} theses
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>);

}