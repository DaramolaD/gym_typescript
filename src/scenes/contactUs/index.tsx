import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/H.Text';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const { register, trigger, formState: { errors } } = useForm();

    const onSumbit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id='contacts' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div
                    className='md:after:w-3/6'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        In, eligendi earum! Dolorem placeat eius rerum cupiditate repellendus
                        aspernatur incidunt tempora necessitatibus, mollitia quibusdam tempore
                        illum sed ducimus porro autem molestias.
                    </p>
                </motion.div>
                {/* FORM AND IMAGE */}
                <div className="mt10 justify-beteen gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                        <form target="_blank"
                            onSubmit={onSumbit}
                            action='https://foemsubmit.co/your@emial.com'
                            method='POST'>
                            <input
                                className={inputStyle} placeholder='NAME' type="text"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "This field is 100 char."}
                                </p>
                            )}
                            <input
                                className={inputStyle} placeholder='EMAIL' type="text"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "invalid email address"}
                                </p>
                            )}
                            <textarea
                                className={inputStyle} placeholder='MESSAGE' rows={4} cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "This field is 2000 char."}
                                </p>
                            )}
                            <button type='submit'
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                            >
                                Submit
                            </button>
                        </form>

                    </motion.div>
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div
                            className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageGraphic} alt="contact-us-page-graphic"
                                className='w-full' />
                        </div>

                    </motion.div>
                </div>
            </motion.div >
        </section >
    )
}

export default ContactUs