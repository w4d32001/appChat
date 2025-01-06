import React from 'react'
import { ContactData } from './Contact.data'
import Contact from '../Contact/Contact'

export default function ContactGroup() {
  return (
    <div className='flex flex-col gap-4'>
        {
            ContactData.map((item) => (
                <Contact name={item.name} message={item.message} image={item.image}></Contact>
            ))

        }
    </div>
  )
}
