import React from "react";
import { MdCoPresent } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { TbCalendarEvent } from "react-icons/tb";
import { Url } from "next/dist/shared/lib/router/router";

export interface Menu {
  name: String;
  icon: React.ReactNode;
  href: Url;
}

export const ALL_DATA = {
  admins: [
    {
      id: "admin1",
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      createdAt: "2023-01-15T08:00:00Z",
    },
  ],
  teachers: [
    {
      id: "teacher1",
      name: "John Smith",
      email: "john.smith@example.com",
      role: "teacher",
      bio: "Expert in computer science education.",
      createdAt: "2023-02-12T10:00:00Z",
      courses: ["course1", "course2"],
    },
    {
      id: "teacher2",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "teacher",
      bio: "Passionate about mathematics and literature.",
      createdAt: "2023-03-05T09:30:00Z",
      courses: ["course3"],
    },
  ],
  students: [
    {
      id: "student1",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      role: "student",
      enrolledCourses: ["course1", "course3"],
      progress: {
        course1: 80,
        course3: 35,
      },
      createdAt: "2023-04-18T12:00:00Z",
    },
    {
      id: "student2",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "student",
      enrolledCourses: ["course2"],
      progress: {
        course2: 50,
      },
      createdAt: "2023-04-20T11:15:00Z",
    },
    {
      id: "student3",
      name: "Michael Green",
      email: "michael.green@example.com",
      role: "student",
      enrolledCourses: ["course1", "course2", "course3"],
      progress: {
        course1: 100,
        course2: 20,
        course3: 10,
      },
      createdAt: "2023-05-01T13:45:00Z",
    },
  ],
  courses: [
    {
      id: "course1",
      title: "Introduction to Computer Science",
      description:
        "Foundational course on computer science principles for beginners.",
      teacherId: "teacher1",
      modules: [
        {
          id: "module1",
          title: "Basics of Programming",
          lessons: [
            {
              id: "lesson1",
              title: "Variables and Data Types",
            },
            {
              id: "lesson2",
              title: "Control Structures",
            },
          ],
        },
        {
          id: "module2",
          title: "Data Structures",
          lessons: [
            {
              id: "lesson3",
              title: "Arrays and Lists",
            },
            {
              id: "lesson4",
              title: "Trees and Graphs",
            },
          ],
        },
      ],
      createdAt: "2023-02-15T08:30:00Z",
    },
    {
      id: "course2",
      title: "Advanced Java Programming",
      description: "Deep dive into Java programming covering advanced topics.",
      teacherId: "teacher1",
      modules: [
        {
          id: "module3",
          title: "Generics and Collections",
          lessons: [
            {
              id: "lesson5",
              title: "Introduction to Generics",
            },
            {
              id: "lesson6",
              title: "Understanding Collections Framework",
            },
          ],
        },
        {
          id: "module4",
          title: "Concurrency in Java",
          lessons: [
            {
              id: "lesson7",
              title: "Threads and Runnables",
            },
            {
              id: "lesson8",
              title: "Multi-threading Best Practices",
            },
          ],
        },
      ],
      createdAt: "2023-03-01T09:00:00Z",
    },
  ],
};

export const ADMINS = [
  {
    id: "admin1",
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "admin",
    createdAt: "2023-01-15T08:00:00Z",
  },
];

export const TEACHERS = [
  {
    id: "teacher1",
    name: "John Smith",
    email: "john.smith@example.com",
    role: "teacher",
    bio: "Expert in computer science education.",
    createdAt: "2023-02-12T10:00:00Z",
    courses: ["course1", "course2"],
  },
  {
    id: "teacher2",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    role: "teacher",
    bio: "Passionate about mathematics and literature.",
    createdAt: "2023-03-05T09:30:00Z",
    courses: ["course3"],
  },
];

export const STUDENTS = [
  {
    id: "student1",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    role: "student",
    enrolledCourses: ["course1", "course3"],
    progress: {
      course1: 80,
      course3: 35,
    },
    createdAt: "2023-04-18T12:00:00Z",
  },
  {
    id: "student2",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "student",
    enrolledCourses: ["course2"],
    progress: {
      course2: 50,
    },
    createdAt: "2023-04-20T11:15:00Z",
  },
  {
    id: "student3",
    name: "Michael Green",
    email: "michael.green@example.com",
    role: "student",
    enrolledCourses: ["course1", "course2", "course3"],
    progress: {
      course1: 100,
      course2: 20,
      course3: 10,
    },
    createdAt: "2023-05-01T13:45:00Z",
  },
];

export const COURSES = [
  {
    id: "course1",
    title: "Introduction to Computer Science",
    description:
      "Foundational course on computer science principles for beginners.",
    teacherId: "teacher1",
    modules: [
      {
        id: "module1",
        title: "Basics of Programming",
        lessons: [
          {
            id: "lesson1",
            title: "Variables and Data Types",
          },
          {
            id: "lesson2",
            title: "Control Structures",
          },
        ],
      },
      {
        id: "module2",
        title: "Data Structures",
        lessons: [
          {
            id: "lesson3",
            title: "Arrays and Lists",
          },
          {
            id: "lesson4",
            title: "Trees and Graphs",
          },
        ],
      },
    ],
    createdAt: "2023-02-15T08:30:00Z",
  },
  {
    id: "course2",
    title: "Advanced Java Programming",
    description: "Deep dive into Java programming covering advanced topics.",
    teacherId: "teacher1",
    modules: [
      {
        id: "module3",
        title: "Generics and Collections",
        lessons: [
          {
            id: "lesson5",
            title: "Introduction to Generics",
          },
          {
            id: "lesson6",
            title: "Understanding Collections Framework",
          },
        ],
      },
      {
        id: "module4",
        title: "Concurrency in Java",
        lessons: [
          {
            id: "lesson7",
            title: "Threads and Runnables",
          },
          {
            id: "lesson8",
            title: "Multi-threading Best Practices",
          },
        ],
      },
    ],
    createdAt: "2023-03-01T09:00:00Z",
  },
];

export const ADMINS_MENU: Menu[] = [
  { name: "Teachers", icon: <MdCoPresent />, href: "/teachers" },
  { name: "Students", icon: <FaRegClipboard />, href: "/students" },
];
export const TEACHERS_MENU: Menu[] = [
  { name: "Students", icon: <MdCoPresent />, href: "/students" },
];
export const STUDENTS_MENU: Menu[] = [
  { name: "Attendance", icon: <MdCoPresent />, href: "/attendance" },
  { name: "Exams", icon: <FaRegClipboard />, href: "/exams" },
  { name: "Assignments", icon: <LuNotebookPen />, href: "/assignments" },
  { name: "Results", icon: <GoGraph />, href: "/results" },
  { name: "Events", icon: <TbCalendarEvent />, href: "/events" },
];

export const Links: { name: String; href: Url }[] = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];
