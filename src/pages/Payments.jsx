
import React, { useState } from 'react';
import axios from 'axios';
import { initMercadoPago , Wallet} from '@mercadopago/sdk-react';

const Payments = () => {
    initMercadoPago("TEST-d58e27ec-efd5-43ef-8dde-58ec0557696f");

    const [preferenceId, setPreferenceId] = useState(false);
    const [amount, setAmount] = useState(0);
    
    const handleDonation = async (amount) => {
        try {
            const response = await axios.post('http://localhost:8000/payments', {
                unit_price: amount,
            });
            const preferenceId = response.data.preferenceId;

            setPreferenceId(preferenceId);
            setAmount(amount)
        } catch (error) {
            console.error(error);
            // Manejar cualquier error de manera apropiada
        }
    };

const customization = {
    visual: {
        buttonBackground: 'white',
        borderRadius: '2rem',
    },
   }

    return (
        <>
        <div className='bg-[url(/src/assets/image/donate.jpg)] bg-cover  bg-no-repeat '>
            {preferenceId === false ?
                <div className='text-black h-screen flex flex-col justify-center items-center' >
                    <div className='bg-[url(https://img.freepik.com/foto-gratis/cielo-nubes-sol-fondo-manana-azul-cielo-pastel-blanco-foco-suave-foco-luz-solar-resumen-borrosa-cian-degradado-naturaleza-pacifica-abrir-vista-fuera-ventanas-primavera-verano-hermoso_1253-1092.jpg?w=996&t=st=1684862229~exp=1684862829~hmac=ac322af6886c22ceaf4126ad1501e7e8a2d1d45e9c6f0769680cd7ce76f66bc4)] bg-no-repeat  bg-center object-contain drop-shadow-md w-[60%] min-h-[40%] rounded-[2rem] border-2 border-gray-300 bg-gray-300 flex flex-row justify-center items-end '>
                        <img className='h-[110%] ml-[-7vw] object-cover ' src="/src/assets/image/dnt.png" alt="" />
                        <div className='flex flex-col justify-center items-center mb-[5%] '>
                        <h1 className='w-[40vw] text-[1.8rem] pr-[2%] font-extrabold text-pink-600 drop-shadow-lg'>How much would you like to donate?</h1>
                        <div className='pt-5 w-[80%] flex flex-col gap-3 items-center justify-center mr-[15%]'>
                            <div>
                                <button className='transition duration-300 ease-in-out bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-[1rem] w-[15vw]' onClick={() => handleDonation(1000)}>Donate $1000</button>
                            </div>
                            <div>
                                <button className='transition duration-300 ease-in-out bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-[1rem] w-[15vw]' onClick={() => handleDonation(5000)}>Donate $5000</button>
                            </div>
                            <div>
                                <button className='transition duration-300 ease-in-out bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-[1rem] w-[15vw]' onClick={() => handleDonation(10000)}>Donate $10000</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        :(

        <div className=" flex flex-col text-black h-screen  justify-center items-center">
             <div className='bg-[url(https://generacionxbox.com/wp-content/uploads/2020/01/Dragon-Ball-Z-Kakarot-940x529.jpg)] bg-no-repeat bg-cover drop-shadow-md w-[60%] min-h-[50%] rounded-[2rem] border-2 border-gray-300 bg-gray-300 flex flex-col justify-center items-end pr-[1%] '>
            <div className='flex flex-col items-center'>
            <h1 className='w-[20vw] font-extrabold text-white text-[2rem]'>Want to donate ${amount}?</h1>

            <Wallet initialization={{ preferenceId: preferenceId}} customization={customization} />
            <button className='transition duration-300 ease-in-out bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-[1rem] w-[10vw] ' onClick={() => setPreferenceId(false)}>Cancel</button>
            </div>
            </div>
        </div>

        )}
        </div>
        </>
    );
};

export default Payments;