import React from 'react'

// JSX is supported in most places in this template in place of strings
const resume = {
  header: {
    name: '{first and last name}',
    links: [
      {
        href: 'mailto:{email address}',
        icon: 'far fa-envelope',
        text: '{email address}',
      },
      {
        href: 'https://github.com/{github username}',
        icon: 'fab fa-github',
        text: 'github.com/{github username}',
      },
      {
        href: 'https://linkedin.com/in/{linkedIn url}',
        icon: 'fab fa-linkedin',
        text: 'linkedin.com/in/{linkedIn url}',
      },
    ],
  },
  summary: [
    'Seeking {job type} position as a {position type} starting {month} {year}',
    'Graduating {month} {year} with a {degree} in {major}',
    '{number} years of {technical} experience',
    '{current position} at {current company}',
    'Skills: {comma separated list of skills}'
  ],
  sections: [
    {
      title: 'Education',
      subsections: [
        {
          title: <a href="{university homepage}" target="_blank" rel="noopener noreferrer">{'university name'}</a>,
          subtitle: '{year in school} - Expected Graduation Date: {month} {year}',
          details: [
            '{degree} of {major}',
            'Current GPA: {gpa}',
            'Completed Coursework: {class names of most notable classes}',
            'Activities: {club or other involvement}'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
        {
          title: <a href="{company homepage}" target="_blank" rel="noopener noreferrer">{'company name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href="{organization homepage}" target="_blank" rel="noopener noreferrer">{'organization name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
          ]
        },
      ]
    }
  ]
}

export default resume