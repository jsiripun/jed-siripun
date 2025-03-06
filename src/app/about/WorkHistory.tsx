import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent } from '@mui/material';


const WorkHistory = () => {
    const workHistory = [
        {
          id: 1,
          company: "Democratic Data Exchange",
          abbreviation: "DDX",
          role: "Senior Developer",
          period: "2019 - Present",
          startDate: "2019-12",
          endDate: "2025-01", // Current
          description: "Led development of core product features and mentored junior developers.",
          achievements: [
            "Increased team productivity by 40% through implementation of new CI/CD pipeline",
            "Architected and launched company's flagship mobile app with 100k+ downloads",
            "Managed team of 5 developers across 3 time zones"
          ],
          technologies: ["React", "Node.js", "AWS", "Docker"],
          color: "bg-blue-500",
          hoverColor: "bg-blue-200"
        },
        {
          id: 2,
          company: "DigiDems",
          abbreviation: "DigiDems",
          role: "Campaign Data Specialist & Data Fellow",
          period: "2018 - 2019",
          startDate: "2018-08",
          endDate: "2019-12",
          description: "Developed and maintained multiple client applications.",
          achievements: [
            "Reduced load times by 60% through optimization of database queries",
            "Implemented responsive design principles across 12 client websites",
            "Created automated testing suite reducing QA time by 30%"
          ],
          technologies: ["Angular", "Python", "PostgreSQL", "Redis"],
          color: "bg-green-500",
          hoverColor: "bg-green-200"
        },
        {
          id: 4,
          company: "Freelance",
          abbreviation: "Freelance",
          role: "Developer",
          period: "2018",
          startDate: "2018-01",
          endDate: "2018-08",
          description: "Contributed to various startup projects and gained full-stack experience.",
          achievements: [
            "Developed MVP for 3 startup clients",
            "Implemented payment processing system handling $1M+ in transactions",
            "Created developer documentation and style guides"
          ],
          technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
          color: "bg-rose-500",
          hoverColor: "bg-rose-200"
        },
        {
          id: 5,
          company: "Tata Consultancy Services",
          abbreviation: "TCS",
          role: "Software Engineer",
          period: "2015 - 2017",
          startDate: "2015-07",
          endDate: "2017-12",
          description: "Contributed to various startup projects and gained full-stack experience.",
          achievements: [
            "Developed MVP for 3 startup clients",
            "Implemented payment processing system handling $1M+ in transactions",
            "Created developer documentation and style guides"
          ],
          technologies: ["JavaScript", "PHP", "MySQL", "jQuery"],
          color: "bg-orange-500",
          hoverColor: "bg-orange-200"
        }
    ].reverse();

  const [selectedJob, setSelectedJob] = useState(workHistory[workHistory.length - 1]);
  const [hoveredJob, setHoveredJob] = useState<any>(null);

  const calculateTimelinePositions = () => {
    const startDate = new Date(workHistory[0].startDate);
    const endDate = new Date();
    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       endDate.getMonth() - startDate.getMonth();

    return workHistory.map(job => {
      const jobStart = new Date(job.startDate);
      const jobEnd = new Date(job.endDate);
      const monthsFromStart = (jobStart.getFullYear() - startDate.getFullYear()) * 12 + 
                             jobStart.getMonth() - startDate.getMonth();
      const jobDuration = (jobEnd.getFullYear() - jobStart.getFullYear()) * 12 + 
                         jobEnd.getMonth() - jobStart.getMonth();
      
      const markerPosition = (monthsFromStart + (jobDuration / 2)) / totalMonths * 100;
      
      return {
        ...job,
        position: (monthsFromStart / totalMonths) * 100,
        width: (jobDuration / totalMonths) * 100,
        markerPosition
      };
    });
  };

  const timelineJobs = calculateTimelinePositions();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Work History</h1>
      </div>

      {/* Timeline */}
      <div className="relative h-32 mb-16">
        {/* Base line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200" />
        
        {/* Present day marker */}
        <div className="absolute right-0 top-14 flex flex-col items-center">
          <div className="w-px h-4 bg-gray-400" />
          <p className="text-sm text-white-600 mt-1">Present</p>
        </div>

        {/* Timeline segments */}
        {timelineJobs.map((job) => (
          <div
            key={job.id}
            onMouseEnter={() => setHoveredJob(job)}
            onMouseLeave={() => setHoveredJob(null)}
            className="group absolute"
            style={{ 
              left: `${job.position}%`,
              width: `${job.width}%`,
              top: 0,
              height: '100%'
            }}
          >
            {/* Duration line */}
            <div 
              className={`absolute h-1 w-full transition-colors duration-300 
                ${hoveredJob?.id === job.id ? job.color.replace('bg-', 'bg-') : 'bg-gray-200'}`}
              style={{ top: '63px' }}
            />

            {/* Marker dot - centered within the job duration */}
            <button
              className={`absolute w-8 h-8 rounded-full transition-all duration-300 
                hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${job.color}
                ${selectedJob.id === job.id ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
              `}
              style={{ 
                left: '50%',
                top: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => setSelectedJob(job)}
            >
              <Briefcase className="w-4 h-4 text-white m-auto" />
            </button>

            {/* Date label */}
            <div 
              className="absolute w-32 text-center" 
              style={{ 
                left: '50%',
                top: '100px',
                transform: 'translateX(-50%)'
              }}
            >
              <p className="text-sm font-medium text-white-600">{job.period}</p>
            </div>

            {/* Company label */}
            <div 
              className={`absolute w-32 text-center transition-opacity duration-300
                ${hoveredJob?.id === job.id || selectedJob.id === job.id ? 'opacity-100' : 'opacity-0'}
              `}
              style={{ 
                left: '50%',
                top: '30px',
                transform: 'translateX(-50%)'
              }}
            >
              <p className="text-sm font-medium text-white-800">{job.abbreviation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Job Details Card */}
      <Card className="transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{selectedJob.company}</h2>
              <p className="text-lg text-gray-600">{selectedJob.role}</p>
              <p className="text-gray-500">{selectedJob.period}</p>
            </div>
            <div className={`w-12 h-12 rounded-full ${selectedJob.color} flex items-center justify-center`}>
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="space-y-6 animate-in slide-in-from-top duration-300">
            <p className="text-gray-700">{selectedJob.description}</p>
            
            <div>
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {selectedJob.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedJob.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkHistory;