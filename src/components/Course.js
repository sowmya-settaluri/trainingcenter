import React from 'react';
import CourseButtons from '../component/CourseButtons';
import CourseDet from '../component/CourseDet';
import courses from '../css/courses.css'

class Course extends React.Component{
    render(){
        return (        
                <div> 
                    <h1 className="ml-4">Technology & Development</h1>
                    <h1 className="ml-4">All Technology & Development Courses</h1>
                    <br/>                   
                    <CourseButtons />
                    <CourseDet />                  
                </div> 
        );
    }
}

export default Course;