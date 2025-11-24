import Link from 'next/link';
import React from 'react';

const CourseDetail =async ({params}) => {
    const {id } =await params;
    return (
        <div>
            <h1>Course Details for ID: {id}</h1>
        </div>
    );
};

export default CourseDetail;