import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Plus, Users, Clock, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  code: string;
  department: string;
  instructor: string;
  students: number;
  capacity: number;
  credits: number;
  schedule: string;
  semester: string;
}

const mockCourses: Course[] = [
  { id: "1", title: "Data Structures and Algorithms", code: "CS-301", department: "Computer Science", instructor: "Dr. Swati pandya", students: 45, capacity: 50, credits: 4, schedule: "Mon, Wed 10:00 AM", semester: "Fall 2024" },
  { id: "2", title: "Database Management Systems", code: "CS-302", department: "Computer Science", instructor: "Prof. sanish panchal", students: 38, capacity: 45, credits: 3, schedule: "Tue, Thu 2:00 PM", semester: "Fall 2024" },
  { id: "3", title: "Digital Electronics", code: "EE-201", department: "Engineering", instructor: "Dr.muskesh khuswah", students: 50, capacity: 50, credits: 4, schedule: "Mon, Wed 1:00 PM", semester: "Fall 2024" },
  { id: "4", title: "Financial Accounting", code: "BA-101", department: "Business", instructor: "Prof. nitin", students: 42, capacity: 60, credits: 3, schedule: "Wed, Fri 11:00 AM", semester: "Fall 2024" },
  { id: "5", title: "Organic Chemistry", code: "CHEM-301", department: "Science", instructor: "Dr. arpit pathak", students: 35, capacity: 40, credits: 4, schedule: "Tue, Thu 9:00 AM", semester: "Fall 2024" },
  { id: "6", title: "Machine Learning", code: "CS-401", department: "Computer Science", instructor: "Dr. kamna", students: 48, capacity: 50, credits: 4, schedule: "Mon, Wed 3:00 PM", semester: "Fall 2024" },
];

export function CourseManagement() {
  const [courses] = useState<Course[]>(mockCourses);

  const getEnrollmentPercentage = (students: number, capacity: number) => {
    return (students / capacity) * 100;
  };

  const getEnrollmentStatus = (percentage: number) => {
    if (percentage >= 90) return { label: "Full", color: "bg-red-100 text-red-800" };
    if (percentage >= 70) return { label: "High", color: "bg-orange-100 text-orange-800" };
    return { label: "Available", color: "bg-green-100 text-green-800" };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Course Management</h2>
          <p className="text-gray-500">Manage courses, schedules, and enrollments</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const enrollmentPercentage = getEnrollmentPercentage(course.students, course.capacity);
          const status = getEnrollmentStatus(enrollmentPercentage);
          
          return (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{course.code}</p>
                  </div>
                  <Badge className={status.color} variant="secondary">
                    {status.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Enrollment</span>
                    <span>{course.students}/{course.capacity}</span>
                  </div>
                  <Progress value={enrollmentPercentage} />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Instructor:</span>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Schedule:</span>
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Credits:</span>
                    <span>{course.credits}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
