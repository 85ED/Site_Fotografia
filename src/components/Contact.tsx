import React, { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show the success message
    setShowSuccess(true);
    
    // Reset form
    e.currentTarget.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Vamos criar memórias juntos! Entre em contato para agendar sua sessão.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-sm">Em breve alguém entrará em contato.</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">+55 11 96564-3020</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">edsonfelixnet@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-400">São Paulo, SP</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Horário de Atendimento
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 10h às 15h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}