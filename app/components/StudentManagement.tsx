import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, Plus, Download, Filter, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  year: string;
  status: "Active" | "Inactive" | "Graduated";
  gpa: string;
}

const mockStudents: Student[] = [
  { id: "STU001", name: "Raj gamot", email: "raj.t@college.edu", department: "Computer Science", year: "3rd Year", status: "Active", gpa: "3.8" },
  { id: "STU002", name: "khuswant singh", email: "khushwant.w@college.edu", department: "Engineering", year: "2nd Year", status: "Active", gpa: "3.6" },
  { id: "STU003", name: "ishaan tamboli", email: "ishaan.d@college.edu", department: "Business Admin", year: "4th Year", status: "Active", gpa: "3.9" },
  { id: "STU004", name: "shivam kumar", email: "shivam.m@college.edu", department: "Science", year: "1st Year", status: "Active", gpa: "3.5" },
  { id: "STU005", name: "kratiak singh", email: "kratika.b@college.edu", department: "Arts", year: "3rd Year", status: "Active", gpa: "3.7" },
  { id: "STU006", name: "yashwardhan singh", email: "yashawardhan.j@college.edu", department: "Computer Science", year: "4th Year", status: "Active", gpa: "4.0" },
  { id: "STU007", name: "yashaswini rathore", email: "yashaswini.g@college.edu", department: "Engineering", year: "2nd Year", status: "Active", gpa: "3.4" },
  { id: "STU008", name: "ishaa gawariya", email: "isha.m@college.edu", department: "Business Admin", year: "3rd Year", status: "Inactive", gpa: "3.2" },
];

export function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students] = useState<Student[]>(mockStudents);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Graduated":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Student Management</CardTitle>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search students by name, email, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.department}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.gpa}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(student.status)} variant="secondary">
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Send Email</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No students found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
