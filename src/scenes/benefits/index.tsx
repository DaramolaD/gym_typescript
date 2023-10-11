import HText from "@/shared/H.Text";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Expedita officia earum reiciendis ipsam quasi obcaecati non ab ex commodi sint?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                 onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with eas. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHIC AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-pagw-graphic" />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves" >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Eos corrupti, nihil recusandae consequatur corporis ipsum quas aliquam illum culpa
                                debitis minus veritatis hic ab temporibus enim doloremque tempore consectetur expedita?
                                Incidunt aut aspernatur quae officia recusandae quos quod magni libero!
                            </p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Cupiditate laudantium nihil tenetur iste, repudiandae deserunt a quos debitis nemo dolores
                                inventore consectetur ad vero eos temporibus distinctio molestias recusandae velit ipsa illo!
                                Alias iusto nulla cupiditate quas? Atque, provident recusandae!
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>

                        </div>
                    </div>
                </div>

            </motion.div>

        </section>
    )
}

export default Benefits