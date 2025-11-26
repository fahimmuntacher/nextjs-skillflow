import Link from 'next/link';
import React from 'react';
import CourseDetails from './CourseDetails';

const CourseDetail =async ({params}) => {
    const {id } =await params;
    return (
        <div>
            <CourseDetails id = {id }></CourseDetails>
        </div>
    );
};

export default CourseDetail;