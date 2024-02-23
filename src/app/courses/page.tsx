'use client'

import { BackgroundGradient } from '@/components/ui/background-gradient'
import courseData from "@/data/music_courses.json"
import Link from 'next/link'


interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}



function page() {
    const featuredCourses = courseData.courses
  return (
    <div className="py-12 mt-24 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">All COURSES</h2>
          <p className="mt-2 text-3xl leadeing-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 justify-center">
            {featuredCourses.map((course:Course)=>(
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-wihte dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                      <p className="text-lg font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <Link className="border-2 rounded-md px-4 py-2 mt-3" href={`/courses/${course.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default page