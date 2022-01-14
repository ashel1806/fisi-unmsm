import axios from "axios"

const teachersCollectionUrl = 'https://fisi-unmsm.herokuapp.com/api/profesores'

export async function getAllTeachers() {
  const res = await axios.get(teachersCollectionUrl)
  const teachers = res.data

  return teachers
}

export function getSlugOfTeacher({ nombres, apellidos }) {
  const firstName = nombres.toLowerCase().split(' ')[0]
  const lastName = apellidos.toLowerCase().split(' ')[0]

  const nameSlug = `${firstName}-${lastName}`
  return nameSlug
}

export async function getAllTeachersNames() {
  const teachers = await getAllTeachers()

  return teachers.map(teacher => {
    const slug = getSlugOfTeacher(teacher)

    return {
      params: {
        name: slug
      }
    }
  })
}

export async function getTeacherData(name) {
  const teachers = await getAllTeachers()
  const nameToArray = name.split('-')

  const teacherByName = teachers.find(teacher => {
    const { nombres, apellidos } = teacher
    const firstName = nombres.split(' ')[0].toLowerCase()
    const lastName = apellidos.split(' ')[0].toLowerCase()

    return firstName === nameToArray[0] && lastName === nameToArray[1]
  })

  return teacherByName
}