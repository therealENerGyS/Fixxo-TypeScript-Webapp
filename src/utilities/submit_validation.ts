export const validateText = (elementName: string, value: string, minLength: number) => {
    if (value.length === 0)
        return `${elementName} is Required`
    else if (value.length < minLength)
        return `${elementName} must contain at least ${minLength} characters`
    else
        return ''
}

export const validateEmail = (elementName: string, value: string, regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) => {
    if (value.length === 0)
        return `${elementName} is Required`
    else if (!regEx.test(value))
        return `${elementName} must be a valid email address (eg. example@domain.com)`
    else
        return ''
}