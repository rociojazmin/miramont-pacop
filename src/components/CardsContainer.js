import React from 'react';
import Card from './Card.js';
import data from './dummyData';

const CardsContainer = () => {
  return (
    <div id="productos" >
      <h1 className='mt-10 text-center text-3xl font-bold tracking-tight  sm:text-3xl text-secondary'>Últimos lanzamientos</h1>
      <section className="px-30 flex flex-wrap justify-center py-20">
        {data.map(({ name, image, language }, index) => (
          <Card key={index} name={name} image={image.original} language={language} />
        ))}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-90 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </section>
    </div >
  );
};

export default CardsContainer;
