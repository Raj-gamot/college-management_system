# College Management System

A modern, responsive web application for managing college administration tasks including student records, course management, and faculty information.

## Features

### Dashboard Overview
- Real-time statistics and key metrics
- Total students, courses, and faculty count
- Active enrollment tracking
- Quick access to all management sections

### Student Management
- Comprehensive student directory with search functionality
- Student profile cards with enrollment details
- Filter by department and enrollment year
- Track academic performance and enrollment status
- Mock data demonstrates 150+ student records

### Course Management
- Course catalog with detailed information
- Enrollment tracking with visual progress bars
- Department-wise course organization
- Credit hours and capacity management
- Real-time enrollment statistics

### Faculty Management
- Faculty directory with profile cards
- Specialization badges and expertise tracking
- Department assignments
- Email contact information
- Years of experience display

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5
- **Package Manager**: pnpm
- **Additional Libraries**:
  - Material-UI for enhanced components
  - Motion (Framer Motion) for animations
  - React Hook Form for form management
  - Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd college-management-system
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                      # Main application component
│   └── components/
│       ├── DashboardOverview.tsx    # Dashboard with statistics
│       ├── StudentManagement.tsx    # Student records interface
│       ├── CourseManagement.tsx     # Course catalog interface
│       ├── FacultyManagement.tsx    # Faculty directory interface
│       ├── ui/                      # Reusable UI components
│       └── figma/                   # Figma-related components
├── styles/
│   ├── theme.css                    # Theme variables
│   └── fonts.css                    # Font imports
└── ...
```

## Key Features Detail

### Responsive Design
- Mobile-first approach
- Sticky header navigation
- Collapsible mobile menu
- Optimized for all screen sizes

### Data Management
- Currently uses mock data for demonstration
- Easily extensible to connect with backend APIs
- Structured data models for students, courses, and faculty

### User Interface
- Clean, modern design
- Consistent component library
- Accessible UI components
- Smooth transitions and interactions

## Current Limitations

- All data is mock/demo data
- No backend integration (frontend only)
- No authentication system
- No database persistence

## Future Enhancements

Potential improvements for production use:
- Backend API integration
- User authentication and authorization
- Database integration (e.g., Supabase, PostgreSQL)
- CRUD operations for all entities
- Advanced filtering and sorting
- Export functionality (PDF, Excel)
- Email notifications
- Academic calendar integration
- Grade management system
- Attendance tracking

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue in the repository.
