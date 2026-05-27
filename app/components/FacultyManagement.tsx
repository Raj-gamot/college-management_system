import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Mail, Phone, BookOpen, Plus } from "lucide-react";

interface Faculty {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  courses: number;
  specialization: string[];
  status: "Active" | "On Leave";
}

const mockFaculty: Faculty[] = [
  { id: "1", name: "Dr. Swati pandya", designation: "Professor", department: "Computer Science", email: "sarah.chen@college.edu", phone: "+1 (555) 123-4567", courses: 3, specialization: ["AI/ML", "Data Science"], status: "Active" },
  { id: "2", name: "Prof. nitin swankar", designation: "Associate Professor", department: "Computer Science", email: "michael.brown@college.edu", phone: "+1 (555) 234-5678", courses: 2, specialization: ["Databases", "Web Dev"], status: "Active" },
  { id: "3", name: "Dr. heena jain", designation: "Professor", department: "Engineering", email: "james.wilson@college.edu", phone: "+1 (555) 345-6789", courses: 2, specialization: ["Electronics", "Circuits"], status: "Active" },
  { id: "4", name: "Prof. mukesh kushwah", designation: "Assistant Professor", department: "Business Administration", email: "emily.davis@college.edu", phone: "+1 (555) 456-7890", courses: 3, specialization: ["Finance", "Marketing"], status: "Active" },
  { id: "5", name: "Dr. sanish panchal", designation: "Professor", department: "Science", email: "robert.taylor@college.edu", phone: "+1 (555) 567-8901", courses: 2, specialization: ["Chemistry", "Research"], status: "Active" },
  { id: "6", name: "Prof. arpit pathak", designation: "Associate Professor", department: "Arts & Humanities", email: "lisa.anderson@college.edu", phone: "+1 (555) 678-9012", courses: 3, specialization: ["Literature", "Writing"], status: "On Leave" },
];

export function FacultyManagement() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Faculty Management</h2>
          <p className="text-gray-500">Manage faculty members and their information</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Faculty Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockFaculty.map((faculty) => (
          <Card key={faculty.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-blue-600 text-white text-xl">
                    {getInitials(faculty.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  <p className="text-sm text-gray-500">{faculty.designation}</p>
                  <Badge
                    className={`mt-2 ${
                      faculty.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                    variant="secondary"
                  >
                    {faculty.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-500">Department</p>
                <p>{faculty.department}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 truncate">{faculty.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{faculty.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{faculty.courses} Active Courses</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">Specialization</p>
                <div className="flex flex-wrap gap-1">
                  {faculty.specialization.map((spec, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
