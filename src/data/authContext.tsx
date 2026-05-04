import React, { useCallback, useState, createContext, useContext } from 'react';
import { mockUsers, type AppUser, type AttendanceRecord } from './mockUsers';
interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'librarian' | 'admin';
  studentId?: string;
  department?: string;
  attendance?: AttendanceRecord[];
}
interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (
  identifier: string,
  password: string)
  => {
    success: boolean;
    error?: string;
    role?: string;
  };
  logout: () => void;
  checkOutStudent: () => void;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => ({
    success: false
  }),
  logout: () => {},
  checkOutStudent: () => {}
});
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }: {children: React.ReactNode;}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const login = useCallback((identifier: string, password: string) => {
    // Support login by email OR studentId
    const found = mockUsers.find(
      (u) =>
      (u.email.toLowerCase() === identifier.toLowerCase() ||
      u.studentId && u.studentId === identifier) &&
      u.password === password
    );
    if (!found) {
      return {
        success: false,
        error:
        'Invalid credentials. Please check your email/student ID and password.'
      };
    }
    const authUser: AuthUser = {
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
      studentId: found.studentId,
      department: found.department,
      attendance: found.attendance ? [...found.attendance] : undefined
    };
    // Auto-record attendance for students
    if (authUser.role === 'student') {
      const today = new Date().toISOString().split('T')[0];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const todayRecord = authUser.attendance?.find(
        (r) => r.date === today && !r.timeOut
      );
      if (!todayRecord) {
        const newRecord: AttendanceRecord = {
          date: today,
          timeIn: timeStr,
          purpose: 'Library Visit'
        };
        authUser.attendance = [newRecord, ...(authUser.attendance || [])];
      }
    }
    setUser(authUser);
    return {
      success: true,
      role: found.role
    };
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const checkOutStudent = useCallback(() => {
    if (!user || user.role !== 'student') return;
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setUser((prev) => {
      if (!prev || !prev.attendance) return prev;
      const updated = prev.attendance.map((r) => {
        if (r.date === today && !r.timeOut) {
          return {
            ...r,
            timeOut: timeStr
          };
        }
        return r;
      });
      return {
        ...prev,
        attendance: updated
      };
    });
  }, [user]);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        checkOutStudent
      }}>
      
      {children}
    </AuthContext.Provider>);

}