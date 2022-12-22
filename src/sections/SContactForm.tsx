import React, { useState } from "react"
import AlertNotification from "../components/AlertNotification"
import { validateText, validateEmail } from "../utilities/submit_validation"

export interface FormType {
  name: string
  email: string
  comments: string
}

const SContactForm: React.FC = () => {
  let currentPage = "Contact Us"
  document.title = `${currentPage} | Fixxo`
  const DEFAULT_VALUES: FormType = { name: '', email: '', comments: '' }
  const [form, setForm] = useState<FormType>(DEFAULT_VALUES)
  const [errors, setErrors] = useState<FormType>(DEFAULT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })

    if (id === 'name')
      setErrors({ ...errors, [id]: validateText(id, value, 2) })
    if (id === 'email')
      setErrors({ ...errors, [id]: validateEmail(id, value) })
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setForm({ ...form, [id]: value })

    if (id === "comments")
      setErrors({ ...errors, [id]: validateText(id, value, 5) })

  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (form.name !== '' && form.email !== '' && form.comments !== '') {
      if (errors.name === '' && errors.email === '' && errors.comments === '') {
        const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })

        if (res.status === 200 || res.status === 201) {
          setSubmitted(true)
          setForm(DEFAULT_VALUES)
        } else {
          setSubmitted(false)
          setFailedSubmit(true)
        }
      }
    } else {
      setFailedSubmit(true)
    }
  }

  return (
    <section className="contact-form">
      <div className="_container">
        {submitted ? (<AlertNotification alertType="success" title="Thank you for your comments!" text="We will contact you as sson as possible" />) : (<></>)}
        {failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!" text="We couldn't submit your comment right now." />) : (<></>)}
        <h2 className="contact-header">Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors?.name ? "error" : "")} value={form.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors?.name}</div>
          </div>
          <div>
            <input id="email" className={(errors?.email ? "error" : "")} value={form.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your email" />
            <div className="errorMessage">{errors?.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors?.comments ? 'error' : '')} style={(errors?.comments ? { border: '1px solid #FF7373' } : {} )} value={form.comments} onChange={(e) => handleTextAreaChange(e)} placeholder="comments"></textarea>
            <div className="errorMessage">{errors?.comments}</div>
          </div>
          <button type="submit">Post comments</button>
        </form>
      </div>
    </section>
  )
}

export default SContactForm