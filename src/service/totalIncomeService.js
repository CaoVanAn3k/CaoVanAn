import axios from 'axios'

const url ='https://5a17-2405-4802-634b-ea0-5d9c-d556-c1bc-ce3e.ngrok-free.app/api/v1'
export const getAllEmployees = async()=>{
  try {
    const respon =await axios.get(url +'/employee/find-all-employee/total-income')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}
export const getAllEmployeeTotalIncomeByCondition = async(type,value)=>{
  try {
    const respon =await axios.get(url +`/employee/find-all-employee/total-income/condition?type=${type}&value=${value}`);
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getAllVacation = async()=>{
  try {
    const respon =await axios.get(url +'/employee/find-all-employee/vacations')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}



export const getAllEmployeeVacation = async(type,value)=>{
  try {
    const respon =await axios.get(url +`/employee/find-all-employee/vacations/condition?type=${type}&value=${value}`);
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getAllBenefits = async () =>{
  try {
    const respon = await axios.get(url +'/employee/find-all-employee/benefits')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getAllEmployeeBenefits = async (type,value) =>{
  try {
    const respon =await axios.get(url +`/employee/find-all-employee/benefits/condition?type=${type}&value=${value}`);
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getAnniversary = async () =>{
  try {
    const respon = await axios.get(url +'/employee/find-all-employee/anniversary')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getVacation = async () =>{
  try {
    const respon = await axios.get(url +'/employee/find-all-employee/vacation-more-than-day-required')
    console.log(respon.data);
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}
export const getBirthDayMonth = async () =>{
  try {
    const respon = await axios.get(url +'/employee/find-all-employee/birth-day-in-month')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

export const getBenefitsPlan = async () =>{
  try {
    const respon = await axios.get(url +'/employee/find-all-employee/benefits-plan-change')
    return respon.data
  } catch (error) {
    throw Error(error)
  }
}

