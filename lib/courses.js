import axios from "axios"

const coursesCollectionUrl = 'https://fisi-unmsm.herokuapp.com/api/cursos'

export async function getAllCourses() {
  const res = await axios.get(coursesCollectionUrl)
  const courses = res.data

  return courses
}

export function getSlugOfCourse(name) {
  const slug = name.toLowerCase().replace(/ /g, '-')
  return slug
}

export async function getAllCoursesNames() {
  const courses = await getAllCourses()

  return courses.map(course => {
    return {
      params: {
        name: getSlugOfCourse(course.nombre)
      }
    }
  })
}

export async function getCourseData(name) {
  const courses = await getAllCourses()
  const courseName = name.replace(/-+/g, ' ')
  const courseByName = courses.find(course => course.nombre.toLowerCase() === courseName)

  return courseByName
}