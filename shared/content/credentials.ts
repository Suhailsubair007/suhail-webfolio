import type { Achievement, EducationItem } from '../types/portfolio'

export const education: EducationItem[] = [
  {
    id: 'cusat',
    institution: 'School of Engineering, CUSAT',
    degree: 'B.Tech',
    field: 'Information Technology',
    location: 'Kochi, Kerala',
    period: 'Nov 2020 — Apr 2024',
    startDate: '2020-11',
    endDate: '2024-04',
    note: 'First Class Distinction',
  },
]

export const achievements: Achievement[] = [
  {
    title: '100 LeetCode problems solved',
    description: 'Sharpened problem-solving across data structures and algorithms.',
    year: '2024',
  },
  {
    title: 'Introduction to Front-End Development — Meta',
    description:
      'Certified course covering HTML, CSS, Bootstrap, version control and React basics.',
    year: '2024',
  },
  {
    title: 'Introduction to Machine Learning — Kaggle',
    description:
      'Foundations in data preprocessing, feature engineering, model selection and evaluation.',
    year: '2023',
  },
]
