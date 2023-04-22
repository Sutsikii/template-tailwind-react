import React from 'react'

export const Contact = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Me contacter</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Vous voulez me contacter pour un projet ? N'hésitez pas !</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre Email</label>
                  <input type="email" id="email" className="p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="mon-email@gmail.com" required>
                  </input>
              </div>
              <div>
                  <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sujet</label>
                  <input type="text" id="subject" className="p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Sujet" required>
                  </input>
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                  <textarea id="message" rows="6" className="p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Votre message"></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white">Envoyer</button>
          </form>
      </div>
  </section>
  )
}
