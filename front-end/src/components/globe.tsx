import React, { useState, useEffect } from 'react';
import Globe from 'react-globe.gl';
import '../index.css';

function Globo() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  interface Country {
    country: string;
    name: string;
    lat: number;
    lng: number;
  }

  const countries: Country[] = [
    { country: 'Afeganistão', name: 'Afghanistan', lat: 33.9391, lng: 67.7099 },
    { country: 'África do Sul', name: 'South Africa', lat: -30.5595, lng: 22.9375 },
    { country: 'Albânia', name: 'Albania', lat: 41.1533, lng: 20.1683 },
    { country: 'Alemanha', name: 'Germany', lat: 51.1657, lng: 10.4515 },
    { country: 'Andorra', name: 'Andorra', lat: 42.5063, lng: 1.5211 },
    { country: 'Angola', name: 'Angola', lat: -11.2027, lng: 17.8739 },
    { country: 'Arábia Saudita', name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
    { country: 'Argentina', name: 'Argentina', lat: -38.4161, lng: -63.6167 },
    { country: 'Austrália', name: 'Australia', lat: -25.2744, lng: 133.7751 },
    { country: 'Áustria', name: 'Austria', lat: 47.5162, lng: 14.5501 },
    { country: 'Brasil', name: 'Brazil', lat: -14.2350, lng: -51.9253 },
    { country: 'Canadá', name: 'Canada', lat: 56.1304, lng: -106.3468 },
    { country: 'China', name: 'China', lat: 35.8617, lng: 104.1954 },
    { country: 'Dinamarca', name: 'Denmark', lat: 56.2639, lng: 9.5018 },
    { country: 'Egito', name: 'Egypt', lat: 26.8206, lng: 30.8025 },
    { country: 'Espanha', name: 'Spain', lat: 40.4637, lng: -3.7492 },
    { country: 'Estados Unidos', name: 'United States', lat: 37.0902, lng: -95.7129 },
    { country: 'França', name: 'France', lat: 46.6034, lng: 1.8883 },
    { country: 'Grécia', name: 'Greece', lat: 39.0742, lng: 21.8243 },
    { country: 'Índia', name: 'India', lat: 20.5937, lng: 78.9629 },
    { country: 'Indonésia', name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
    { country: 'Itália', name: 'Italy', lat: 41.8719, lng: 12.5674 },
    { country: 'Japão', name: 'Japan', lat: 36.2048, lng: 138.2529 },
    { country: 'México', name: 'Mexico', lat: 23.6345, lng: -102.5528 },
    { country: 'Nigéria', name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
    { country: 'Paquistão', name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
    { country: 'Portugal', name: 'Portugal', lat: 39.3999, lng: -8.2245 },
    { country: 'Reino Unido', name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
    { country: 'Rússia', name: 'Russia', lat: 61.5240, lng: 105.3188 },
    { country: 'Tailândia', name: 'Thailand', lat: 15.8700, lng: 100.9925 },
    { country: 'Turquia', name: 'Turkey', lat: 38.9637, lng: 35.2433 },
    { country: 'Ucrânia', name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
    { country: 'Vietnã', name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
    { country: 'Zimbábue', name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
  ];
  

  // Função de clique nos países
  const handleCountryClick = (country: Country) => {
    setSelectedCountry(country);
  };

  // Atualiza o tamanho da janela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Preparando os dados dos rótulos com base nos países
  const labelsData = countries.map((country) => ({
    lat: country.lat - 2,
    lng: country.lng,
    labelText: country.name,  
    labelColor: 'white',      
    labelAltitude: 0.01,   
  }));

  return (
    <div className="relative w-full h-full">
      <Globe
        width={windowWidth}  
        height={windowHeight} 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={countries}  
        labelsData={labelsData}  
        pointAltitude={0.01}
        pointRadius={0.7}
        pointColor={() => 'red'}
        onPointClick={handleCountryClick}
        labelLat="lat"           
        labelLng="lng"           
        labelText="labelText"   
        labelColor="labelColor" 
        labelIncludeDot= "false"  
        labelSize={2}          
        labelAltitude={0.01}     
      />
      {selectedCountry && (
        <div className="absolute top-10 left-10 bg-white p-4 rounded-md shadow-lg z-10">
          <p className="text-2xl">País selecionado: {selectedCountry.country}</p>
          <p>Nome: {selectedCountry.name}</p>
          <p>Latitude: {selectedCountry.lat}</p>
          <p>Longitude: {selectedCountry.lng}</p>
        </div>
      )}
    </div>
  );
}

export default Globo;
