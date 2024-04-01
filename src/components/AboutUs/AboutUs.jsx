import PatternImg from '../../assets/images/patternImg.jpg';
import PatternImg2 from '../../assets/images/patternImg2.jpg';
import AboutUsBg from '../../assets/images/secBg.jpg';
import { SectionTitle } from '../SectionTitles';
import AboutImg from '../../assets/images/resources/aboutImg.jpg';
import { ReactComponent as Signature } from '../../lib/icons/Signature.svg';

const AboutUs = ({ aboutData }) => {
	return (
		<section className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
			<div
				className="fixedBg bg-left-top bg-no-repeat opacity-20"
				style={{ backgroundImage: `url(${PatternImg})` }}
			></div>
			<div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
				<SectionTitle title="About" titleInner="Me" desc={aboutData.subtitle}></SectionTitle>
				<div className="aboutUs relative w-full p-[1.25rem] lg:p-[1.875rem] mt-[5.9375rem]">
					<div
						className="aboutUsBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-gray bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
						style={{ backgroundImage: `url(${AboutUsBg})` }}
					></div>
					<div className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">
						<div>
							<div className="aboutImg relative mt-[-5.625rem] ml-0 lg:ml-[-1.875rem]">
								<img
									className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative z-[1] md:w-[480px]  md:h-[560px] object-cover"
									src={aboutData.imgLink ? aboutData.imgLink : AboutImg}
									alt=""
								></img>
								{/* About Image */}
							</div>
						</div>
						<div>
							<div className="aboutCapWrap w-full">
								<div className="aboutCap relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden z-[1] lg:py-12 xl:pt-[4.6875rem] xl:pb-[4.375rem] p-5 md:p-10 lg:px-[3.5rem] xl:px-20">
									<div
										className="aboutCapBg bg-white opacity-90 opc8 absolute rounded-in sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
										style={{ backgroundImage: `url(${PatternImg2})` }}
									></div>
									<h3 className="text-accent2 font-light text-[1.5rem] md:text-[1.875rem] leading-tight font-Poppins">
										Hi,
									</h3>
									<h4 className="text-accent2 font-light text-[1.325rem] md:text-[1.5rem] leading-normal font-Poppins">
										My name is{' '}
										<span className="text-accent font-bold uppercase text-[1.5rem] md:text-[1.875rem]">
											{aboutData.firstName} {aboutData.lastName}
										</span>
									</h4>
									<ul className="grid grid-cols-1 gap-5 mt-6">
										{aboutData.details.map((detail, index) => (
											<li
												key={index}
												className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]"
											>
												<strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
													{detail.title}:
												</strong>
												<span className="text-desc2 font-semibold font-NunitoSans col-span-2">
													{detail.title === 'Phone' || detail.title === 'Email' ? (
														<a
															className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
															href={
																detail.title === 'Phone'
																	? `tel:${detail.info}`
																	: `mailto:${detail.info}`
															}
															title={detail.info}
														>
															{detail.info}
														</a>
													) : (
														detail.info
													)}
												</span>
											</li>
										))}
									</ul>
									<Signature className="fill-accent h-[4.5rem] mt-[2.375rem]"></Signature>
									{/* About Cap */}
								</div>
								{/* About Cap Wrap */}
							</div>
						</div>
					</div>
					{/* About Us */}
				</div>
			</div>
			{/* About Us Wrap */}
		</section>
	);
};

export default AboutUs;
