import React from 'react';
import { Camera, Users, Calendar, Building, Heart, Mountain } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Casamentos",
      description: "Capturando momentos únicos e emocionantes do seu dia especial."
    },
    {
      icon: Users,
      title: "Retratos",
      description: "Fotos profissionais que destacam sua personalidade e estilo."
    },
    {
      icon: Calendar,
      title: "Eventos",
      description: "Cobertura completa de eventos sociais e corporativos."
    },
    {
      icon: Users,
      title: "Família",
      description: "Eternizando momentos especiais com seus entes queridos."
    },
    {
      icon: Building,
      title: "Corporativo",
      description: "Fotografia profissional para sua empresa ou negócio."
    },
    {
      icon: Mountain,
      title: "Ensaios Externos",
      description: "Sessões fotográficas em locações especiais e ao ar livre."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Oferecemos uma variedade de serviços fotográficos profissionais para atender suas necessidades.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}