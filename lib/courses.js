import axios from "axios"

const coursesCollectionUrl = 'https://fisi-unmsm.herokuapp.com/api/cursos'

export async function getAllCourses() {
  const res = await axios.get(coursesCollectionUrl)
  const courses = res.data

  return courses
}

export async function getAllCoursesNames() {
  const courses = await getAllCourses()

  return courses.map(course => {
    return {
      params: {
        name: course.nombre.toLowerCase().replace(/ /g, '-')
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