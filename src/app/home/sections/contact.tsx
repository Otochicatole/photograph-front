'use client';
import React, {useState} from 'react';
import {Button} from "@/components/ui/buttons";
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        paese: '',
        provincia: '',
        citta: '',
        dataCerimonia: '',
        storia: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isFormComplete = Object.values(formData).every(value => value.trim() !== '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full p-3">
            <motion.div
                initial={{ scale: 1, y: 0 }}
                animate={isSubmitting ? { scale: 0.5, y: -200, opacity: 0 } : { scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col items-center justify-center w-full`}
            >
                {!isSubmitted ? (
                    <form
                        className="flex flex-col gap-10 p-6 lg:p-0 w-full lg:w-[80%] 2xl:w-[60%] justify-center items-center text-[#545454]"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40 w-full">
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="nome">Nome</label>
                                <input name="nome"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                                <label htmlFor="cognome">Cognome</label>
                                <input name="cognome"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                                <label htmlFor="email">E-mail</label>
                                <input name="email"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="paese">Paese</label>
                                <input name="paese"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                                <label htmlFor="provincia">Provincia</label>
                                <input name="provincia"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                                <label htmlFor="citta">Città</label>
                                <input name="citta"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                                <label htmlFor="dataCerimonia">Data della cerimonia</label>
                                <input name="dataCerimonia"
                                    className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] p-3 w-full"
                                    type="text" onChange={handleChange} />
                            </div>
                        </div>
                        <label htmlFor="storia">Raccontami la tua storia d&apos;amore!</label>
                        <textarea name="storia"
                            className="border-2 border-[#DCB3AD] focus:outline focus:border-[#acacac] rounded-[10px] min-h-[200px] p-3 w-full"
                            onChange={handleChange}></textarea>
                        {isFormComplete && (
                            <Button variant="secondary" className="w-[275px]">Effettuare una prenotazione</Button>
                        )}
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full relative overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center flex w-full items-center justify-center min-h-[80vh] p-6"
                        >
                            <div className='flex flex-col items-center justify-center h-[70vh] w-full lg:w-[80%] shadow-xl gap-6  rounded-sm p-3'>
                                <h2 className='text-7xl text-black/30'>GRAZIE</h2>
                                <p className='text-black/30 text-3xl'>La sua richiesta è stata inviata, <br /> pronto mi contatterò con lei 💖</p>
                                <Button variant="secondary" className="w-[275px] mt-10" onClick={() => { router.push('/') }}>Torna alla Home</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Contact;