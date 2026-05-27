import { useState } from "react";
import { Button } from "./components/ui/button";
import { DashboardOverview } from "./components/DashboardOverview";
import { StudentManagement } from "./components/StudentManagement";
import { CourseManagement } from "./components/CourseManagement";
import { FacultyManagement } from "./components/FacultyManagement";
import { LayoutDashboard, Users, BookOpen, GraduationCap, Menu, X } from "lucide-react";

type View = "dashboard" | "students" | "courses" | "faculty";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "dashboard" as View, name: "Dashboard", icon: LayoutDashboard },
    { id: "students" as View, name: "Students", icon: Users },
    { id: "courses" as View, name: "Courses", icon: BookOpen },
    { id: "faculty" as View, name: "Faculty", icon: GraduationCap },
  ];

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardOverview />;
      case "students":
        return <StudentManagement />;
      case "courses":
        return <CourseManagement />;
      case "faculty":
        return <FacultyManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">College Manager</h1>
                <p className="text-xs text-gray-500">Administrative Portal</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    onClick={() => setCurrentView(item.id)}
                    className="gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    onClick={() => {
                      setCurrentView(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
}
