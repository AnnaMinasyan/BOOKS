import { IBookDTO } from "@/interfaces/interfaces"
import instanceApi from "./instanceApi"
import keys from "./keys"
import { AddBookFormValue } from "@/validations/bookValidation"

export const bookApi = {

    async getBooks():Promise<IBookDTO[]> {        
        const response= await instanceApi.get(`${keys.BASE_URL}book`)
        return response.data
    },
    async deleteBookById(id:number) {                
        const response= await instanceApi.delete(`${keys.BASE_URL}book/${id}`)
        return response.data
    },
    async postBook(body:AddBookFormValue):Promise<IBookDTO> {                
        const response= await instanceApi.post(`${keys.BASE_URL}book`,body)
        return response.data
    },
    async putBook(id:number,body:AddBookFormValue):Promise<IBookDTO> {                
        const response= await instanceApi.put(`${keys.BASE_URL}book/${id}`,body)
        return response.data
    },
}