import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, BookOpen, GraduationCap, Calendar } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
}

function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && <p className="text-xs text-gray-500 mt-1">{trend}</p>}
      </CardContent>
    </Card>
  );
}

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="2,847"
          icon={<Users className="h-5 w-5 text-blue-600" />}
          trend="+12% from last month"
        />
        <StatCard
          title="Active Courses"
          value="156"
          icon={<BookOpen className="h-5 w-5 text-green-600" />}
          trend="24 new this semester"
        />
        <StatCard
          title="Faculty Members"
          value="284"
          icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
          trend="+8 this year"
        />
        <StatCard
          title="Upcoming Events"
          value="18"
          icon={<Calendar className="h-5 w-5 text-orange-600" />}
          trend="Next: Dec 25"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "New student enrolled", name: "yashaswini rathore", dept: "Computer Science", time: "5 mins ago" },
                { action: "Course updated", name: "Data Structures CS-201", dept: "Engineering", time: "1 hour ago" },
                { action: "Faculty joined", name: "Dr. Michael Brown", dept: "Mathematics", time: "2 hours ago" },
                { action: "Exam scheduled", name: "Physics Mid-term", dept: "Science", time: "3 hours ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start justify-between border-b pb-3 last:border-b-0">
                  <div>
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.name} • {activity.dept}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Computer Science", students: 654, color: "bg-blue-500" },
                { name: "Engineering", students: 587, color: "bg-green-500" },
                { name: "Business Administration", students: 498, color: "bg-purple-500" },
                { name: "Arts & Humanities", students: 432, color: "bg-orange-500" },
                { name: "Science", students: 676, color: "bg-red-500" },
              ].map((dept, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{dept.name}</span>
                    <span className="text-gray-500">{dept.students} students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${dept.color} h-2 rounded-full`}
                      style={{ width: `${(dept.students / 676) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
