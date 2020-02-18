// Dto file

/**
 * User Dto
 */
export class UserDto {

    constructor(seq, id, pwd, name, birthDate, address, type, isUse, createAt) {
        this.seq = seq
        this.id = id
        this.pwd = pwd
        this.name = name
        this.birthDate = birthDate
        this.address = address
        this.type = type
        this.isUse = this.changeIsUser(isUse)
        this.createAt = createAt
    }

    /**
     * isUse
     * @param isUse
     * @returns {string}
     */
    changeIsUser(isUse) {
        return isUse == true ? 'T' : 'F'
    }

}

/**
 * List Dto
 */
export class ListDto {
    constructor(count, numPage, data) {
        this.count = count
        this.numPage = numPage
        this.data = data
    }
}
